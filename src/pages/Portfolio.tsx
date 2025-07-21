// src/pages/Portfolio.tsx
import React, { useState } from "react";
import { PlayCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useAudioStore } from "../store/useAudioStore";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  audioUrl: string; // Add audioUrl
  spotifyLink?: string;
  youtubeLink?: string;
  bandcampLink?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "City Lights Serenade",
    category: "Original Composition",
    description:
      "An atmospheric instrumental piece exploring urban nocturnal soundscapes, blending jazz harmonies with electronic textures.",
    imageUrl:
      "https://images.unsplash.com/photo-1510915364890-a22a38a32ad7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Example MP3
    spotifyLink: "https://spotify.com/your-song",
    youtubeLink: "http://googleusercontent.com/youtube.com/1",
  },
  {
    id: 2,
    title: "Whispering Woods (Film Score)",
    category: "Film Score",
    description:
      "A haunting orchestral score for an indie short film about nature, mystery, and ancient spirits. Captures suspense and wonder.",
    imageUrl:
      "https://images.unsplash.com/photo-1470225620780-b889fba42a7c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Example MP3
    youtubeLink: "http://googleusercontent.com/youtube.com/2",
    bandcampLink: "https://bandcamp.com/your-album-2",
  },
  {
    id: 3,
    title: "Rhythm of the Soul (Live)",
    category: "Live Performance",
    description:
      "An energetic recording from a memorable live jazz fusion performance at The Blue Note, showcasing improvisation and tight grooves.",
    imageUrl:
      "https://images.unsplash.com/photo-1549495977-96a933f81e35?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Example MP3
    youtubeLink: "https://youtube.com/your-video-1",
  },
  {
    id: 4,
    title: "Electronic Dreams (Collab)",
    category: "Collaboration",
    description:
      "A captivating collaborative track with DJ [Collaborator Name], blending melodic techno with organic sounds for a unique dance experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099351235-ef72729a6e60?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", // Example MP3
    spotifyLink: "https://spotify.com/your-song-1",
  },
  {
    id: 5,
    title: "Ambient Echoes Vol. 1",
    category: "Album",
    description:
      "A full-length ambient album designed for relaxation and meditation, featuring lush soundscapes and gentle textures.",
    imageUrl:
      "https://images.unsplash.com/photo-1478721111000-8488e02d68e6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", // Example MP3
    bandcampLink: "https://bandcamp.com/your-album-3",
  },
  {
    id: 6,
    title: "Jazz Cafe Sessions",
    category: "EP",
    description:
      "An EP featuring smooth jazz pieces recorded in an intimate cafe setting, perfect for a relaxed evening.",
    imageUrl:
      "https://images.unsplash.com/photo-1511671785501-c88df302e1de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", // Example MP3
    spotifyLink: "http://googleusercontent.com/spotify.com/3",
  },
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { playTrack, currentTrack, isPlaying, togglePlayPause } =
    useAudioStore();

  const categories = [
    "All",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const handlePlayClick = (item: PortfolioItem) => {
    const trackData = {
      id: item.id,
      title: item.title,
      artist: "Your Name", // Or extract from item if available
      audioUrl: item.audioUrl,
      coverArt: item.imageUrl,
    };

    if (currentTrack?.id === item.id) {
      togglePlayPause(); // Toggle if it's the same track
    } else {
      playTrack(trackData); // Play new track
    }
  };

  return (
    <div className="container mx-auto py-20 px-4 min-h-screen pt-32">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center mb-12 text-primary font-headline"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Sonic Creations
      </motion.h1>

      {/* Category Filter */}
      <motion.div
        className="flex justify-center flex-wrap gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-lg font-body font-medium transition-all duration-300
              ${
                selectedCategory === category
                  ? "bg-secondary text-white shadow-md"
                  : "bg-cardBg text-lighterText hover:bg-gray-700 hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-cardBg rounded-xl shadow-xl overflow-hidden transform hover:scale-102 transition-all duration-300 group relative border border-gray-700"
            variants={cardVariants}
            transition={{ delay: index * 0.05 }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handlePlayClick(item)}
                  className="text-white mx-2 hover:text-primary transition-colors transform hover:scale-110"
                  aria-label={
                    currentTrack?.id === item.id && isPlaying
                      ? `Pause ${item.title}`
                      : `Play ${item.title}`
                  }
                >
                  {currentTrack?.id === item.id && isPlaying ? (
                    <motion.div
                      key="pause-icon"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.8 }}
                    >
                      <PlayCircle size={64} fill="white" strokeWidth={1} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="play-icon"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.8 }}
                    >
                      <PlayCircle size={64} fill="white" strokeWidth={1} />
                    </motion.div>
                  )}
                </button>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2 font-headline">
                {item.title}
              </h2>
              <p className="text-primary text-sm font-semibold mb-3 font-body">
                {item.category}
              </p>
              <p className="text-lighterText text-base mb-4 line-clamp-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {item.spotifyLink && (
                  <a
                    href={item.spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded-full flex items-center transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                      alt="Spotify"
                      className="h-5 w-5 mr-2"
                    />
                    Spotify
                  </a>
                )}
                {item.youtubeLink && (
                  <a
                    href={item.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-full flex items-center transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                      alt="YouTube"
                      className="h-5 w-5 mr-2"
                    />
                    YouTube
                  </a>
                )}
                {item.bandcampLink && (
                  <a
                    href={item.bandcampLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold py-2 px-4 rounded-full flex items-center transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Bandcamp
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
