// src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Music, CalendarCheck, Quote } from "lucide-react";
import { motion, type Variants } from "framer-motion"; // No need for AnimatePresence anymore

const Home: React.FC = () => {
  // Array of your background images
  const backgroundImages = [
    "../images/a1.jpg",
    "../images/a2.jpg", // Make sure these paths are correct!
    "../images/a3.jpg",
    "../images/p1.jpg",
    "../images/cts8.JPG",
    // Make sure these paths are correct!
    // Add more image paths as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide index
  const slideInterval = 4000; // Time each slide stays visible (e.g., 4 seconds)
  const slideTransitionDuration = 1.0; // Duration of the slide animation in seconds

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgroundImages.length);
    }, slideInterval); // Adjusted based on your desired interval

    return () => clearInterval(interval); // Clean up on unmount
  }, [backgroundImages.length, slideInterval]); // Dependencies for useEffect

  // Variants for the overall container and text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-darkBg via-gray-950 to-gray-800 pt-20 pb-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* --- Image Slider Background --- */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="flex h-full"
            // We use the `x` property to translate the entire flex container
            // The value is negative (currentSlide * 100vw) to move images to the left
            animate={{ x: `-${currentSlide * 100}vw` }}
            transition={{
              duration: slideTransitionDuration,
              ease: "easeInOut",
            }} // Slower transition for sliding
            style={{ width: `${backgroundImages.length * 100}vw` }} // Ensures container is wide enough for all images
          >
            {backgroundImages.map((image, index) => (
              <img
                key={index} // Use index as key if order doesn't change, or unique IDs for real data
                src={image}
                alt={`Background slide ${index + 1}`}
                className="w-screen h-full object-cover flex-shrink-0" // Each image takes up 100vw
                style={{ opacity: 0.3 }} // Apply consistent opacity here
              />
            ))}
          </motion.div>
        </div>
        {/* --- End Image Slider Background --- */}

        {/* Foreground Content (highest layer) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 z-10">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline mb-4 text-shadow-lg"
            variants={itemVariants}
          >
            Single Afe Paul
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl font-body font-light mb-8 max-w-3xl"
            variants={itemVariants}
          >
            Crafting Sonic Journeys Across Genres
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            variants={itemVariants}
          >
            <Link to="/portfolio" className="btn-primary">
              <Music className="mr-3" size={24} /> Discover My Music
            </Link>
            <Link to="/booking" className="btn-secondary">
              <CalendarCheck className="mr-3" size={24} /> Book a Session
            </Link>
          </motion.div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentSlide ? "bg-primary" : "bg-gray-500/50" // Active dot color
              }`}
              onClick={() => setCurrentSlide(index)} // Allow clicking dots to navigate
            ></span>
          ))}
        </div>
      </section>
      ---
      {/* About Me Section */}
      <section className="bg-cardBg text-lightText py-16 px-4 w-full shadow-inner-lg">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-primary font-headline"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            My Story, My Sound
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <motion.div
              className="md:w-1/3 mb-8 md:mb-0"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="../images/a5.png"
                alt="Your Headshot - A professional portrait"
                className="rounded-full w-56 h-56 object-cover object-center mx-auto border-4 border-primary shadow-2xl animate-pop-in"
              />
            </motion.div>
            <motion.div
              className="md:w-2/3 text-lg leading-relaxed text-lighterText text-justify"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-4">
                Greetings! I'm Singer Afe Paul, a musician captivated by the
                intricate tapestry of sound. My journey began with the soulful
                melodies of Violin & guitar and has since ventured into an
                eclectic fusion of [mention your primary genres, e.g., ambient
                electronic, soulful R&B, and cinematic orchestral]. I believe
                music is a universal language, a medium through which emotions
                are shared and stories are told.
              </p>
              <p>
                Each composition is an exploration, a meticulous crafting of
                harmonies and rhythms designed to resonate deeply with the
                listener. Whether performing live, scoring a film, or producing
                a new track in the studio, my aim is to create immersive
                experiences that transcend the ordinary. I invite you to delve
                into my sonic world and discover the passion behind every note.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      ---
      {/* Featured Work / Latest Release Section */}
      <section className="bg-darkBg text-lightText py-16 px-4 w-full">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-secondary font-headline"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Latest Creation
          </motion.h2>
          <motion.div
            className="bg-cardBg rounded-xl shadow-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center lg:space-x-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="../images/p13.png"
              alt="Album Art: Echoes of Tomorrow"
              className="w-full lg:w-96 h-auto lg:h-96 object-cover rounded-lg mb-8 lg:mb-0 shadow-lg transform hover:scale-102 transition-transform duration-300"
            />
            <div className="text-left flex-1">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white font-headline">
                Echoes of Tomorrow
              </h3>
              <p className="text-primary text-xl mb-4 font-body">
                New Single | Released: July 15, 2025
              </p>
              <p className="mb-6 text-lighterText text-lg leading-relaxed">
                "Echoes of Tomorrow" is my most personal work to date, a deep
                dive into themes of hope, introspection, and the evolving human
                spirit. This track weaves together cinematic strings, intricate
                electronic textures, and evocative vocal harmonies, crafting an
                immersive soundscape that invites listeners to reflect on their
                own journeys. It’s an auditory promise of a brighter future.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://spotify.com/your-song"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full text-md font-semibold flex items-center transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                    alt="Spotify"
                    className="h-6 w-6 mr-3"
                  />
                  Stream on Spotify
                </a>
                <a
                  href="http://googleusercontent.com/youtube.com/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full text-md font-semibold flex items-center transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                    alt="YouTube"
                    className="h-6 w-6 mr-3"
                  />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      ---
      {/* Testimonials Section */}
      <section className="bg-cardBg text-lightText py-16 px-4 w-full">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-primary font-headline"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Voices of Appreciation
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-darkBg p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Quote size={48} className="text-secondary mx-auto mb-4" />
              <p className="italic text-lg mb-6 text-lighterText">
                "Your Name's compositions are a masterclass in emotional
                storytelling. Every note is intentional, creating an
                unforgettable auditory experience. A truly gifted artist!"
              </p>
              <p className="font-semibold text-right text-white">
                - Dr. Evelyn Reed, Music Critic
              </p>
            </motion.div>
            <motion.div
              className="bg-darkBg p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Quote size={48} className="text-secondary mx-auto mb-4" />
              <p className="italic text-lg mb-6 text-lighterText">
                "Collaborating with Your Name was an absolute revelation. Their
                professionalism, creativity, and unique perspective elevated our
                entire project. Highly recommended!"
              </p>
              <p className="font-semibold text-right text-white">
                - Alex Chen, Film Director
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
