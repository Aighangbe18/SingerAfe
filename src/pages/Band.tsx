import { motion, type Variants } from "framer-motion";
import { Music } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
const Band = () => {
  // Data for photos (music-themed)
  const photos = [
    {
      id: 1,
      src: "../images/ff58.jpg",
      alt: "Conceptual album art with vibrant colors",
    },
    {
      id: 2,
      src: "../images/ff57.jpg",
      alt: "Dynamic shot of a musician performing live on stage",
    },
    {
      id: 3,
      src: "../images/ff59.jpg",
      alt: "Musician in a recording studio with instruments",
    },
    {
      id: 4,
      src: "../images/ff53.jpg",
      alt: "Musician interacting with fans at an event",
    },
    {
      id: 5,
      src: "../images/ff56.jpg",
      alt: "Professional band portrait",
    },
    {
      id: 6,
      src: "../images/ff80.jpg",
      alt: "Close-up of a vintage guitar",
    },
    {
      id: 7,
      src: "../images/ff81.jpg",
      alt: "Candid shot of musicians backstage",
    },
    {
      id: 8,
      src: "../images/ff82.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 9,
      src: "../images/ff83.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 9,
      src: "../images/ff84.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 10,
      src: "../images/ff85.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 11,
      src: "../images/ff86.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 12,
      src: "../images/ff100.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 13,
      src: "../images/ff64.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 14,
      src: "../images/ff98.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 15,
      src: "../images/ff104.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 16,
      src: "../images/ff106.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 17,
      src: "../images/ff107.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 18,
      src: "../images/p15.png",
      alt: "View of a large concert crowd",
    },
    {
      id: 19,
      src: "../images/ff111.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 20,
      src: "../images/ff11.jpg",
      alt: "View of a large concert crowd",
    },
    {
      id: 21,
      src: "../images/ff3.jpg",
      alt: "View of a large concert crowd",
    },
  ];

  const navigate = useNavigate();

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
            <Music size={48} className="text-orange-300" /> Friends & Family
          </motion.h2>

          <button
            className="bg-orange-300 font-bold py-4 px-6 m-5 rounded-full"
            onClick={() => navigate("/gallery")}
          >
            Back To Gallery
          </button>

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
              </motion.div>
            ))}
          </div>
          <button
            className="bg-orange-300 font-bold py-4 px-6 m-5 rounded-full"
            onClick={() => navigate("/gallery")}
          >
            Back To Gallery
          </button>
        </motion.section>
      </div>
    </div>
  );
};

export default Band;
