// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

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
        <Link
          to="/"
          className="text-white text-3xl font-bold font-headline hover:text-primary transition-colors"
        >
          AFE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-lighterText hover:text-orange-300 transition-colors text-lg font-body font-medium
                ${location.pathname === link.path ? "text-orange-200" : ""}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 h-0.5 bg-orange-500 bottom-0 -mb-1"
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
