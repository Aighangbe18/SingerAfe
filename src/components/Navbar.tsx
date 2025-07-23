import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// AfePaulLogo Component - Extracted from the logo immersive
// This component contains the SVG and its specific styling.
const AfePaulLogo: React.FC = () => {
  return (
    <>
      {/*
        The following <style> block contains CSS variables and keyframes
        that are crucial for the logo's appearance and animations.
        In a real-world application, these should ideally be moved to your
        global CSS file (e.g., index.css) or Tailwind config.
        For this demonstration, they are inlined for self-containment.
      */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Space+Grotesk:wght@700&family=Orbitron:wght@500&display=swap');

        :root {
            --color-primary: #8B5CF6; /* Violet 500 - more vibrant */
            --color-secondary: #C084FC; /* Violet 400 - lighter secondary */
            --color-accent: #FDE047; /* Yellow 400 - bright accent */
            --color-dark-bg: #0A0A15; /* Deeper, richer dark background */
            --color-card-bg: #1A1A2E; /* Dark card background */
            --color-light-text: #E2E8F0; /* Lighter text */
            --color-lighter-text: #CBD5E1; /* Even lighter text */
            --color-orange-300: #fbbf24; /* Tailwind orange-300 */
            --color-orange-500: #f97316; /* Tailwind orange-500 */
        }

        .font-headline {
            font-family: 'Space Grotesk', sans-serif;
        }
        .font-orbitron {
            font-family: 'Orbitron', sans-serif; /* For a techy, futuristic feel */
        }

        @keyframes float-glow {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(50px, -50px) scale(1.1); }
            100% { transform: translate(0, 0) scale(1); }
        }

        .logo-wrapper-inner { /* Renamed to avoid conflict with outer wrapper */
            background: linear-gradient(145deg, var(--color-card-bg), #2A2A40); /* Deeper gradient for card */
            padding: 0.5rem 1rem; /* Adjusted padding for Navbar context */
            border-radius: 0.75rem; /* Smaller rounded corners for Navbar */
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--color-primary); /* Lighter shadow and border */
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smoother transition */
            transform-style: preserve-3d;
            perspective: 1000px;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.05); /* Subtle inner border */
            z-index: 1;
            display: flex;
            align-items: center;
            gap: 0.5rem; /* Space between icon and text */
        }

        .logo-wrapper-inner:hover {
            transform: translateY(-2px) rotateX(1deg) rotateY(-1deg) scale(1.01); /* Subtle tilt and scale */
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6), 0 0 0 2px var(--color-accent); /* Stronger hover shadow and border */
        }

        .logo-wrapper-inner::before { /* Animated border glow */
            content: '';
            position: absolute;
            inset: -2px; /* Extend glow outside */
            border-radius: 1rem; /* Match wrapper border-radius + inset */
            background: conic-gradient(from 0deg at 50% 50%, transparent 0%, var(--color-primary) 30%, var(--color-secondary) 60%, var(--color-accent) 90%, transparent 100%);
            filter: blur(5px); /* Soften the glow */
            opacity: 0;
            animation: spin-glow 6s infinite linear; /* Continuous spin */
            transition: opacity 0.4s ease-in-out;
            z-index: -1;
        }
        .logo-wrapper-inner:hover::before {
            opacity: 0.8;
        }

        @keyframes spin-glow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .logo-text-inner { /* Renamed for inner component */
            text-align: left; /* Align text within the logo */
            line-height: 0.9;
            display: flex;
            flex-direction: column;
        }

        .logo-text-inner .singer {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.8rem; /* Smaller for Navbar context */
            font-weight: 400;
            color: var(--color-lighter-text);
            letter-spacing: 0.1em;
            text-transform: uppercase;
            opacity: 0.9;
            transition: all 0.4s ease-in-out;
        }

        .logo-wrapper-inner:hover .singer {
            color: var(--color-accent);
            opacity: 1;
            letter-spacing: 0.12em;
            transform: translateY(-1px);
        }

        .logo-text-inner .name {
            font-family: 'Orbitron', sans-serif; /* Using Orbitron */
            font-size: 1.5rem; /* Adjusted for Navbar context */
            font-weight: 700;
            color: var(--color-orange-300); /* Changed to constant orange-300 */
            text-shadow: 0 0 5px rgba(var(--color-orange-300), 0.4); /* Changed text-shadow color */
            transition: all 0.4s ease-in-out;
            /* Removed background clip and fill for solid color */
            position: relative;
            display: inline-block;
        }

        .logo-wrapper-inner:hover .name {
            transform: scale(1.01) translateY(-1px);
            text-shadow: 0 0 8px rgba(var(--color-orange-300), 0.6); /* Changed text-shadow color */
            /* Removed background clip and fill for solid color */
        }

        .icon-abstract-sound-small { /* Smaller icon for Navbar */
            width: 40px;
            height: 40px;
            transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.4s ease-in-out;
            filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.2));
            animation: icon-pulse-small 2s infinite alternate ease-in-out; /* Subtle pulse */
        }

        .logo-wrapper-inner:hover .icon-abstract-sound-small {
            transform: translateY(-3px) rotate(2deg) scale(1.03);
            filter: drop-shadow(0 5px 10px rgba(var(--color-accent), 0.4));
        }

        @keyframes icon-pulse-small {
            0% { transform: scale(1); }
            100% { transform: scale(1.02); }
        }

        .abstract-wave-path-small {
            fill: none;
            stroke: url(#waveGradientNavbar); /* Use gradient for stroke */
            stroke-width: 2; /* Thinner stroke */
            stroke-linecap: round;
            stroke-linejoin: round;
            opacity: 0.8;
            transition: all 0.4s ease-in-out;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-wave-small 3s forwards ease-out;
        }
        .abstract-wave-path-small:nth-child(2) {
            animation-delay: 0.1s;
        }
        .abstract-wave-path-small:nth-child(3) {
            animation-delay: 0.2s;
        }

        @keyframes draw-wave-small {
            to { stroke-dashoffset: 0; }
        }

        .logo-wrapper-inner:hover .abstract-wave-path-small {
            stroke-width: 3;
            opacity: 1;
            transform: scale(1.03);
        }

        /* Responsive adjustments for logo within Navbar */
        @media (max-width: 768px) {
            .logo-wrapper-inner {
                padding: 0.4rem 0.8rem;
                border-radius: 0.6rem;
                gap: 0.4rem;
            }
            .logo-text-inner .singer {
                font-size: 0.7rem;
            }
            .logo-text-inner .name {
                font-size: 1.2rem;
            }
            .icon-abstract-sound-small {
                width: 30px;
                height: 30px;
            }
            .abstract-wave-path-small {
                stroke-width: 1.5;
            }
        }
        `}
      </style>
      <div className="logo-wrapper-inner">
        <svg
          className="icon-abstract-sound-small"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Abstract Wave Paths */}
          <path
            className="abstract-wave-path-small"
            d="M20 75 C40 40, 60 110, 80 75 S110 40, 130 75"
          />
          <path
            className="abstract-wave-path-small"
            d="M20 85 C40 50, 60 120, 80 85 S110 50, 130 85"
          />
          <path
            className="abstract-wave-path-small"
            d="M20 95 C40 60, 60 130, 80 95 S110 60, 130 95"
          />

          {/* Central "A" or abstract element */}
          <path
            d="M75 25 L50 125 L100 125 L75 25 Z"
            fill="url(#centerGradientNavbar)"
            opacity="0.8"
          />
          <circle
            cx="75"
            cy="80"
            r="10"
            fill="var(--color-accent)"
            opacity="0.9"
          />

          {/* Gradients for icon elements (unique IDs for Navbar context) */}
          <defs>
            <linearGradient
              id="waveGradientNavbar"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stop-color="var(--color-primary)" />
              <stop offset="50%" stop-color="var(--color-secondary)" />
              <stop offset="100%" stop-color="var(--color-accent)" />
            </linearGradient>
            <linearGradient
              id="centerGradientNavbar"
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
            >
              <stop offset="0%" stop-color="var(--color-primary)" />
              <stop offset="100%" stop-color="var(--color-secondary)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="logo-text-inner">
          <span className="singer">SINGER</span>
          <h1 className="name font-orbitron">AFE PAUL</h1>
        </div>
      </div>
    </>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Booking", path: "/booking" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
  };

  const mobileLinkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <nav className="bg-darkBg p-4 shadow-lg fixed w-full z-50 top-0 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Replaced text logo with AfePaulLogo component */}
        <Link to="/" className="flex items-center">
          <AfePaulLogo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-lighterText hover:text-accent transition-colors text-lg font-body font-medium
                ${
                  location.pathname === link.path ? "text-orange-300" : ""
                }`} /* Active link color set to orange-300 */
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 h-0.5 bg-orange-500 bottom-0 -mb-1" /* Underline color set to orange-500 */
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-cardBg py-4 mt-2 border-t border-gray-700"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={mobileLinkVariants}>
                <Link
                  to={link.path}
                  className="block text-gray-200 hover:bg-gray-700 px-6 py-3 text-xl font-medium transition-colors"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
