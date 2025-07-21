// src/store/useAudioStore.ts
import { create } from 'zustand';

interface AudioState {
  currentTrack: {
    id: number;
    title: string;
    artist: string;
    audioUrl: string;
    coverArt: string;
  } | null;
  isPlaying: boolean;
  playTrack: (track: AudioState['currentTrack']) => void;
  pauseTrack: () => void;
  togglePlayPause: () => void;
  setCurrentTrack: (track: AudioState['currentTrack']) => void; // Added for external setting
}

export const useAudioStore = create<AudioState>((set, get) => ({
  currentTrack: null,
  isPlaying: false,

  playTrack: (track) => {
    // If a new track is selected, set it and play.
    // If the same track is selected but paused, just play.
    const current = get().currentTrack;
    if (current?.id !== track?.id) {
      set({ currentTrack: track, isPlaying: true });
    } else if (current && !get().isPlaying) {
      set({ isPlaying: true });
    }
  },

  pauseTrack: () => set({ isPlaying: false }),

  togglePlayPause: () => {
    set((state) => ({ isPlaying: !state.isPlaying }));
  },

  setCurrentTrack: (track) => {
    set({ currentTrack: track });
  },
}));