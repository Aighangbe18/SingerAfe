// src/components/Footer.tsx
import React from "react";
import { Instagram, Youtube, Facebook, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBg text-lighterText py-8 mt-16 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors transform hover:scale-110"
          >
            <Instagram size={28} />
          </a>
          <a
            href="http://googleusercontent.com/youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors transform hover:scale-110"
          >
            <Youtube size={28} />
          </a>
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors transform hover:scale-110"
          >
            <Facebook size={28} />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors transform hover:scale-110"
          >
            <Twitter size={28} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-primary transition-colors transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
        <nav className="mb-6">
          <ul className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-lg">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-primary transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className="hover:text-primary transition-colors"
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
            {/* Add Privacy Policy, Terms, etc. here */}
          </ul>
        </nav>
        <p className="text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved. Crafted
          with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
