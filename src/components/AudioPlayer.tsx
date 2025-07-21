// src/components/AudioPlayer.tsx
import React, { useRef, useEffect, useState } from "react";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useAudioStore } from "../store/useAudioStore";
import { motion, AnimatePresence } from "framer-motion";

const AudioPlayer: React.FC = () => {
  const { currentTrack, isPlaying, togglePlayPause } = useAudioStore();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.7); // 70% volume
  const [isMuted, setIsMuted] = useState(false);

  // Play/Pause logic
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((e) => console.error("Error playing audio:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]); // currentTrack dependency ensures re-render on new track

  // Load new track when currentTrack changes
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.load(); // Load the new audio source
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((e) => console.error("Error playing audio:", e));
      }
    }
  }, [currentTrack]); // Only load/play when currentTrack object itself changes

  // Volume control
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  if (!currentTrack) {
    return null; // Don't render if no track is selected
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed bottom-0 left-0 right-0 bg-cardBg text-lightText p-4 shadow-2xl z-50 border-t border-gray-700"
      >
        <div className="container mx-auto flex items-center justify-between">
          <audio ref={audioRef} src={currentTrack.audioUrl} loop={false} />

          {/* Track Info */}
          <div className="flex items-center flex-grow min-w-0 pr-4">
            <img
              src={currentTrack.coverArt || "https://via.placeholder.com/60"}
              alt="Cover Art"
              className="w-16 h-16 rounded-md object-cover mr-4 shadow-md"
            />
            <div className="flex flex-col truncate">
              <h3 className="text-lg font-semibold text-primary truncate">
                {currentTrack.title}
              </h3>
              <p className="text-sm text-gray-400 truncate">
                {currentTrack.artist}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4 mx-4">
            <button
              className="text-gray-400 hover:text-primary transition-colors disabled:opacity-50"
              disabled
            >
              <SkipBack size={24} />
            </button>
            <button
              onClick={togglePlayPause}
              className="bg-primary text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors transform hover:scale-105"
            >
              {isPlaying ? (
                <Pause size={28} fill="white" />
              ) : (
                <Play size={28} fill="white" />
              )}
            </button>
            <button
              className="text-gray-400 hover:text-primary transition-colors disabled:opacity-50"
              disabled
            >
              <SkipForward size={24} />
            </button>
          </div>

          {/* Volume Control */}
          <div className="hidden md:flex items-center space-x-2 w-32 ml-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX size={20} />
              ) : (
                <Volume2 size={20} />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                if (isMuted && parseFloat(e.target.value) > 0)
                  setIsMuted(false);
              }}
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AudioPlayer;
