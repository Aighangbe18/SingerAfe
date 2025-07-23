// src/pages/Contact.tsx
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  AlertCircle,
  Loader, // Added for loading indicator
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for the field as user types
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true); // Set loading to true on submission
      // Replace with your actual Formspree endpoint or backend API
      const formspreeUrl = "https://formspree.io/f/YOUR_FORMSPREE_ID"; // IMPORTANT: Replace with your Formspree ID
      try {
        const response = await fetch(formspreeUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form on success
        } else {
          // Attempt to parse error message from Formspree
          const errorData = await response.json();
          alert(
            `Oops! There was an error submitting your message: ${
              errorData.error || "Please try again."
            }`
          );
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false); // Always reset loading state
      }
    }
  };

  // Framer Motion variants for staggered animation and individual items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
      },
    },
  };

  return (
    <div className="container mx-auto py-20 px-4 min-h-screen pt-32 font-body bg-mainBg text-lighterText">
      {/* Page Title */}
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold text-center mb-6 text-primary font-headline tracking-tight leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Let's <span className="text-orange-300">Connect</span> and Build{" "}
        <br className="hidden md:inline" /> Something{" "}
        <span className="text-orange-300">Great</span> Together
      </motion.h1>

      {/* Subtitle/Description */}
      <motion.p
        className="text-center text-xl text-lighterText mb-16 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Whether you have a groundbreaking idea, a potential collaboration, or
        just want to say hello, I'm genuinely excited to hear from you.
      </motion.p>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-cardBg p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm">
        {/* Contact Information Section */}
        <motion.div
          className="flex flex-col space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-5 text-orange-300 font-headline">
              Get in Touch
            </h2>
            <div className="space-y-6 text-lighterText text-lg">
              <div className="flex items-center group">
                <Mail
                  className="text-primary group-hover:text-orange-300 transition-colors mr-5 flex-shrink-0"
                  size={32}
                />
                <a
                  href="mailto:aduragbemi.afe@gmail.com"
                  className="hover:text-primary transition-colors break-words text-lg"
                >
                  aduragbemi.afe@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone
                  className="text-primary group-hover:text-orange-300 transition-colors mr-5 flex-shrink-0"
                  size={32}
                />
                <a
                  href="tel:+2347068677504"
                  className="hover:text-primary transition-colors text-lg"
                >
                  +234 706 867 7504
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin
                  className="text-primary group-hover:text-orange-300 transition-colors mr-5 flex-shrink-0"
                  size={32}
                />
                <span className="text-lg">
                  Lagos, Nigeria{" "}
                  <span className="text-sm opacity-80">
                    (Available Globally)
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-5 text-orange-300 font-headline">
              Connect Online
            </h2>
            <div className="flex space-x-7">
              <a
                href="https://www.instagram.com/singer_afe_paul?igsh=MWxsM3RhN292Y2szaQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Instagram size={36} />
              </a>
              <a
                href="https://www.youtube.com/channel/YOUR_YOUTUBE_CHANNEL_ID" // Placeholder: Update with real YouTube URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Youtube size={36} />
              </a>
              <a
                href="https://www.facebook.com/share/1F5MTn8rZS/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Facebook size={36} />
              </a>
              <a
                href="https://x.com/singer_afepaul?t=epvyyYKI3_VloE-2lhbG3A&s=08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Twitter size={36} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.4, duration: 0.7 },
            },
          }}
        >
          <h2 className="text-4xl font-bold mb-6 text-orange-300 font-headline">
            Send Me a Message
          </h2>
          {isSubmitted ? (
            // Success Message State
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-10 rounded-2xl shadow-xl text-center border border-primary/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <CheckCircle size={80} className="mx-auto mb-6 text-primary" />
              <h3 className="text-4xl font-bold mb-4 font-headline text-primary">
                Message Sent Successfully! 🎉
              </h3>
              <p className="text-xl text-lighterText mb-8">
                Thank you for reaching out! I'll get back to you as soon as
                possible, usually within 1-2 business days.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-primary hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
              >
                Send Another Message
                <Send className="ml-3" size={20} />
              </button>
            </motion.div>
          ) : (
            // Contact Form
            <form
              onSubmit={handleSubmit}
              className="space-y-8 p-6 bg-gray-800/60 rounded-xl shadow-inner border border-gray-700"
            >
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className=" text-lighterText text-lg font-semibold mb-2 flex items-center"
                >
                  Name <span className="text-red-400 ml-1 text-xl">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className={`w-full py-3 px-4 text-white bg-gray-900 rounded-lg border focus:outline-none focus:ring-4 focus:ring-primary/60 transition-all duration-200 placeholder-gray-500 text-lg ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  }`}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <motion.p
                    id="name-error"
                    className="text-red-400 text-sm mt-2 flex items-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                    {errors.name}
                  </motion.p>
                )}
              </div>
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className=" text-lighterText text-lg font-semibold mb-2 flex items-center"
                >
                  Email <span className="text-red-400 ml-1 text-xl">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full py-3 px-4 text-white bg-gray-900 rounded-lg border focus:outline-none focus:ring-4 focus:ring-primary/60 transition-all duration-200 placeholder-gray-500 text-lg ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <motion.p
                    id="email-error"
                    className="text-red-400 text-sm mt-2 flex items-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                    {errors.email}
                  </motion.p>
                )}
              </div>
              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="text-lighterText text-lg font-semibold mb-2 flex items-center"
                >
                  Subject <span className="text-red-400 ml-1 text-xl">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's your message about?"
                  className={`w-full py-3 px-4 text-white bg-gray-900 rounded-lg border focus:outline-none focus:ring-4 focus:ring-primary/60 transition-all duration-200 placeholder-gray-500 text-lg ${
                    errors.subject ? "border-red-500" : "border-gray-700"
                  }`}
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                />
                {errors.subject && (
                  <motion.p
                    id="subject-error"
                    className="text-red-400 text-sm mt-2 flex items-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                    {errors.subject}
                  </motion.p>
                )}
              </div>
              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="text-lighterText text-lg font-semibold mb-2 flex items-center"
                >
                  Message <span className="text-red-400 ml-1 text-xl">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6} // Slightly reduced rows for a more compact look
                  placeholder="Type your message here..."
                  className={`w-full py-3 px-4 text-white bg-gray-900 rounded-lg border focus:outline-none focus:ring-4 focus:ring-primary/60 transition-all duration-200 placeholder-gray-500 text-lg ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } resize-y`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                ></textarea>
                {errors.message && (
                  <motion.p
                    id="message-error"
                    className="text-red-400 text-sm mt-2 flex items-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                    {errors.message}
                  </motion.p>
                )}
              </div>
              {/* Submit Button */}
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-4 px-8 rounded-full w-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-xl disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-2xl active:scale-95"
                disabled={isLoading} // Disable button when loading
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin mr-3" size={20} />{" "}
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-3" size={20} />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
