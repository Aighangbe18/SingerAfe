import { motion, type Variants } from "framer-motion";
import { Music, PlayCircle } from "lucide-react";

// Animation variants for sections
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
  },
};

// Animation variants for individual cards
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow:
      "0 30px 60px -15px rgba(0, 0, 0, 0.4), 0 15px 30px -7px rgba(0, 0, 0, 0.2)",
    rotateZ: 0.7, // Slightly more pronounced rotation
    transition: { type: "spring", stiffness: 300, damping: 12 },
  },
};

// Background animation variants
const backgroundPulse: Variants = {
  animate: {
    scale: [1, 1.02, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Main App component
const Gallery = () => {
  // Data for photos (music-themed)
  const photos = [
    {
      id: 1,
      src: "../images/a1.jpg",
      alt: "Conceptual album art with vibrant colors",
      title: "Epic Stage Presence",
      description:
        "The visual heart of our latest sound, blending abstract forms with raw emotion.",
      link: "./stage",
    },
    {
      id: 2,
      src: "../images/a2.jpg",
      alt: "Dynamic shot of a musician performing live on stage",
      title: "Connecting with the Crowd",
      description:
        "Capturing the raw energy and passion of a recent concert performance.",
      link: "./crowd",
    },
    {
      id: 3,
      src: "../images/p26.jpg",
      alt: "Musician in a recording studio with instruments",
      title: "Behind the Studio Magic",
      description:
        "Intimate moments from our latest recording session, crafting new sounds.",
      link: "./behind-studio",
    },
    {
      id: 4,
      src: "../images/cts8.JPG",
      alt: "Musician interacting with fans at an event",
      title: "City Chor",
      description:
        "Joyful memories from with City Choir, celebrating our community.",
      link: "./city-choir",
    },
    {
      id: 5,
      src: "../images/ff58.jpg",
      alt: "Professional band portrait",
      title: "Friends & Family",
      description: "Connecting With Our loved Ones.",
      link: "./band",
    },
    {
      id: 6,
      src: "../images/ff12.JPG",
      alt: "Close-up of a vintage guitar",
      title: "Personal Picture",
      description: "Each Picture Dictating My Happy Moments.",
      link: "./strings",
    },
    {
      id: 7,
      src: "../images/cts2.JPG",
      alt: "Candid shot of musicians backstage",
      title: "Backstage Chronicles",
      description:
        "Unfiltered glimpses into the moments before the stage lights ignite.",
      link: "./back-stage",
    },
    {
      id: 8,
      src: "../images/audience.avif",
      alt: "View of a large concert crowd",
      title: "Festival of Lights",
      description: "The incredible energy of our audience, a true inspiration.",
      link: "./festivals",
    },
  ];

  // Data for videos (music-themed)
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0",
      title: "Official Music Video: 'Synthwave Dream'",
      description:
        "Dive into the visual narrative of our latest single, a journey through sound and light.",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/LXb3EKWsInQ?controls=0",
      title: "Live Concert: 'Rhythm Unleashed'",
      description:
        "Experience the full live performance from our sold-out arena show.",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/M7lc1UVf-VE?controls=0",
      title: "Studio Vlog: 'Creating the Next Hit'",
      description:
        "Follow us behind the scenes as we compose and produce new tracks.",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/xvFZjo5PgG0?controls=0",
      title: "Acoustic Session: 'Unplugged Harmonies'",
      description: "An intimate acoustic rendition of our fan favorites.",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/k-t_y4D4d5E?controls=0",
      title: "Tour Diary: 'On the Road Again'",
      description:
        "Join us on tour, from city lights to stage nights, a true rock 'n' roll adventure.",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/N_L7-L0Lp9E?controls=0",
      title: "Interview: 'The Creative Process'",
      description:
        "An in-depth conversation about our inspirations, challenges, and future.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 font-inter bg-gradient-to-br from-gray-950 via-purple-950 to-black text-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "../images/ss.png",
        }}
        variants={backgroundPulse}
        initial="animate"
        animate="animate"
      ></motion.div>
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
        initial={{ x: -100, y: -100 }}
        animate={{
          x: 100,
          y: 100,
          rotate: 360,
          transition: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
        initial={{ x: 100, y: 100 }}
        animate={{
          x: -100,
          y: -100,
          rotate: -360,
          transition: { duration: 25, repeat: Infinity, ease: "linear" },
        }}
      ></motion.div>

      {/* Content Wrapper to ensure it's above background */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Header Section */}
        <motion.header
          className="text-center mb-20 relative z-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h1 className="text-7xl md:text-8xl mt-7 font-extrabold text-white leading-tight mb-6 drop-shadow-2xl tracking-tight">
            The <span className="text-orange-300">Rhythm</span> & The{" "}
            <span className="text-blue-400">Visuals</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Dive into the captivating world of our music through stunning
            photography and exhilarating video performances. Experience the
            journey.
          </p>
        </motion.header>

        {/* Photo Section */}
        <motion.section
          className="w-full max-w-7xl mb-28 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-14 text-center flex items-center justify-center gap-4 drop-shadow-lg"
            variants={sectionVariants}
          >
            <Music size={48} className="text-purple-400" /> Photo Harmonies
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden cursor-pointer border border-purple-700/60 transition-all duration-300 ease-out"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-60 object-cover rounded-t-3xl border-b border-gray-700"
                />
                <div className="p-7">
                  <h3 className="font-bold text-2xl text-white mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {photo.description}
                  </p>
                  <button className="px-4 py-2 m-2 bg-blue-500 rounded-full justify-center align-middle">
                    <a href={photo.link}>View More </a>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Video Section */}
        <motion.section
          className="w-full max-w-7xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-14 text-center flex items-center justify-center gap-4 drop-shadow-lg"
            variants={sectionVariants}
          >
            <PlayCircle size={48} className="text-teal-400" /> Video Crescendos
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden cursor-pointer border border-teal-700/60 transition-all duration-300 ease-out"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-t-3xl border-b border-gray-700">
                  {" "}
                  {/* 16:9 Aspect Ratio */}
                  <iframe
                    src={video.src}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  ></iframe>
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle
                      size={80}
                      className="text-white opacity-90 hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-2xl text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Gallery;
