import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from "lucide-react";

interface AudioPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  podcast: {
    id: number;
    title: string;
    image: string;
    audioSrc: string;
  };
}

const AudioPlayer = ({ isOpen, onClose, podcast }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Reset states immediately when podcast changes
    setCurrentTime(0);
    setDuration(0);
    setProgress(0);
    setIsPlaying(false);
    
    console.log("🔄 AudioPlayer: States reset for", podcast.title);

    // Wait for audio element to be ready
    const setupAudio = () => {
      const audio = audioRef.current;
      if (!audio) {
        console.log("❌ Audio ref still not ready, retrying...");
        setTimeout(setupAudio, 50);
        return;
      }

      console.log("🎵 AudioPlayer: Setting up new podcast", podcast.title);

      // Clean up any current audio
      audio.pause();
      audio.currentTime = 0;

      const updateTime = () => {
      console.log("⏰ Time update event fired:", audio.currentTime, "Duration:", audio.duration);
      const newCurrentTime = audio.currentTime;
      setCurrentTime(newCurrentTime);
      
      if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        const progressPercent = (newCurrentTime / audio.duration) * 100;
        setProgress(progressPercent);
        console.log("📊 Progress updated:", progressPercent.toFixed(2) + "%");
      } else {
        console.log("⚠️ Duration not ready:", audio.duration);
      }
    };

    const updateDuration = () => {
      console.log("📏 Duration loaded:", audio.duration);
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleLoadedData = () => {
      console.log("📁 Audio data loaded - ready to play");
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
        console.log("📏 Duration set from loadeddata:", audio.duration);
      }
    };

    const handleEnded = () => {
      console.log("Audio ended");
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    const handlePlay = () => {
      console.log("▶️ Audio play event - starting playback");
      setIsPlaying(true);
      // Force an immediate time update
      updateTime();
      
      // Set up a backup timer in case timeupdate events don't fire
      const backupTimer = setInterval(() => {
        if (!audio.paused) {
          updateTime();
        } else {
          clearInterval(backupTimer);
        }
      }, 500);
      
      // Clean up backup timer after 30 seconds
      setTimeout(() => clearInterval(backupTimer), 30000);
    };

    const handlePause = () => {
      console.log("⏸️ Audio pause event");
      setIsPlaying(false);
    };

    const handleLoadStart = () => {
      console.log("Audio load started");
    };

    const handleCanPlay = () => {
      console.log("Audio can play");
    };

    // Add all event listeners
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("canplay", handleCanPlay);
    
    console.log("🎧 Event listeners added to audio element");

      // Load the audio
      audio.load();
      
      // Force initial setup
      setTimeout(() => {
        console.log("Audio setup check:", {
          src: audio.src,
          readyState: audio.readyState,
          duration: audio.duration,
          currentTime: audio.currentTime
        });
      }, 100);

      return () => {
        console.log("🧹 AudioPlayer: Cleaning up event listeners");
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
        audio.removeEventListener("loadeddata", handleLoadedData);
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
        audio.removeEventListener("loadstart", handleLoadStart);
        audio.removeEventListener("canplay", handleCanPlay);
        
        // Also pause and reset audio when cleaning up
        audio.pause();
        audio.currentTime = 0;
      };
    };

    // Start the setup process
    const cleanupFn = setupAudio();
    
    return cleanupFn;
  }, [podcast.audioSrc, podcast.title]);

  // Separate effect to ensure audio element is properly initialized
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Small delay to ensure DOM is ready
    const initializeAudio = () => {
      console.log("🚀 Initializing audio element...");
      
      // Check if event listeners are working by testing one
      const testListener = () => {
        console.log("✅ Test event fired - audio element is responsive");
      };
      
      audio.addEventListener("loadstart", testListener, { once: true });
      
      // Force a load to trigger the test
      if (audio.src) {
        audio.load();
      }
      
      setTimeout(() => {
        audio.removeEventListener("loadstart", testListener);
      }, 1000);
    };

    // Wait a bit for the DOM to be fully ready
    const timeoutId = setTimeout(initializeAudio, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen]); // Run when modal opens

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) {
      console.error("Audio element not found");
      return;
    }

    console.log("Toggle play/pause - Current state:", isPlaying);
    console.log("Audio paused property:", audio.paused);

    try {
      if (audio.paused) {
        await audio.play();
        console.log("Play initiated");
      } else {
        audio.pause();
        console.log("Pause initiated");
      }
    } catch (error) {
      console.error("Error controlling audio:", error);
    }
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = value[0];
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = value[0];
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const skipTime = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleClose = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    // Reset all states when closing
    setIsPlaying(false);
    setCurrentTime(0);
    setProgress(0);
    setDuration(0);
    
    console.log("AudioPlayer: Modal closed, all states reset");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-urban-dark border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-primary text-center">
            #{podcast.id} {podcast.title}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Reproductor de audio
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Podcast Cover */}
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={podcast.image}
                alt={podcast.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Audio Element */}
          <audio
            ref={audioRef}
            src={podcast.audioSrc}
            preload="metadata"
          />

          {/* Progress Bar */}
          <div className="space-y-2">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              onValueChange={handleSeek}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => skipTime(-10)}
              className="text-primary hover:text-primary/80"
            >
              <SkipBack className="h-5 w-5" />
            </Button>

            <Button
              variant="default"
              size="icon"
              onClick={togglePlayPause}
              className="h-12 w-12 bg-primary hover:bg-primary/90"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 ml-1" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => skipTime(10)}
              className="text-primary hover:text-primary/80"
            >
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
              className="text-primary hover:text-primary/80"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume]}
              max={1}
              step={0.1}
              onValueChange={handleVolumeChange}
              className="flex-1"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AudioPlayer;