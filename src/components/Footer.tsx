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
            href="https://www.instagram.com/singer_afe_paul?igsh=MWxsM3RhN292Y2szaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors transform hover:scale-110"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://youtube.com/@singerafepaul01?si=WfbxfFlWzQQNu-lZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors transform hover:scale-110"
          >
            <Youtube size={28} />
          </a>
          <a
            href="https://www.facebook.com/share/1F5MTn8rZS/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors transform hover:scale-110"
          >
            <Facebook size={28} />
          </a>
          <a
            href="https://x.com/singer_afepaul?t=epvyyYKI3_VloE-2lhbG3A&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors transform hover:scale-110"
          >
            <Twitter size={28} />
          </a>
          <a
            href="mailto:aduragbemi.afe@gmail.com"
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
                to="/gallery"
                className="hover:text-primary transition-colors"
              >
                Gallery
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
          © {new Date().getFullYear()} Aighangbe Blessing. All rights reserved.
          Crafted with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
