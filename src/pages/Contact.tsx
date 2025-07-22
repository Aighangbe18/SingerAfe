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
      // Replace with your actual Formspree endpoint or backend API
      // For example: const formspreeUrl = "https://formspree.io/f/YOUR_FORMSPREE_ID";
      try {
        // const response = await fetch(formspreeUrl, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(formData),
        // });
        // if (response.ok) {
        //   setIsSubmitted(true);
        //   setFormData({ name: '', email: '', subject: '', message: '' });
        // } else {
        //   alert("Oops! There was an error submitting your message. Please try again.");
        // }
        // For demonstration, simulate success:
        console.log("Contact Form Data:", formData);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        console.error("Form submission error:", error);
        alert("Something went wrong. Please try again later.");
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="container mx-auto py-20 px-4 min-h-screen pt-32">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center mb-12 text-primary font-headline"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Connect
      </motion.h1>

      <p className="text-center text-lg text-lighterText mb-10 max-w-2xl mx-auto">
        Whether it's a new project, a collaboration idea, or just a friendly
        hello, I'm always eager to hear from you.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-cardBg p-8 rounded-xl shadow-2xl border border-gray-700">
        {/* Contact Information */}
        <motion.div
          className="flex flex-col space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { staggerChildren: 0.1, delay: 0.2 },
            },
          }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4 text-secondary font-headline">
              Reach Out Directly
            </h2>
            <div className="space-y-4 text-lighterText text-lg">
              <div className="flex items-center">
                <Mail className="text-primary mr-4 flex-shrink-0" size={28} />
                <a
                  href="mailto:aduragbemi.afe@gmail.com"
                  className="hover:text-primary transition-colors break-words"
                >
                  aduragbemi.afe@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary mr-4 flex-shrink-0" size={28} />
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +234 706 867 7504
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary mr-4 flex-shrink-0" size={28} />
                <span>Based in Lagos, Nigeria (Available Globally)</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4 text-secondary font-headline">
              Find Me Online
            </h2>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/singer_afe_paul?igsh=MWxsM3RhN292Y2szaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors transform hover:scale-110"
              >
                <Instagram size={32} />
              </a>
              <a
                href="https://youtube.com/@singerafepaul01?si=WfbxfFlWzQQNu-lZ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors transform hover:scale-110"
              >
                <Youtube size={32} />
              </a>
              <a
                href="https://www.facebook.com/share/1F5MTn8rZS/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors transform hover:scale-110"
              >
                <Facebook size={32} />
              </a>
              <a
                href="https://x.com/singer_afepaul?t=epvyyYKI3_VloE-2lhbG3A&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors transform hover:scale-110"
              >
                <Twitter size={32} />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
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
          <h2 className="text-3xl font-bold mb-6 text-secondary font-headline">
            Send Me a Message
          </h2>
          {isSubmitted ? (
            <motion.div
              className="bg-gray-700 text-white p-8 rounded-lg shadow-md text-center border border-gray-600"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <CheckCircle size={64} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-3xl font-bold mb-3 font-headline">
                Message Sent Successfully!
              </h3>
              <p className="text-lg text-lighterText">
                Thank you for your message. I'll get back to you as soon as
                possible, usually within 1-2 business days.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-primary hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition-colors transform hover:scale-105"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lighterText text-sm font-bold mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 ${
                    errors.name ? "border-red-500" : "focus:ring-primary"
                  } bg-gray-200`}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-red-500 text-xs italic mt-1"
                  >
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lighterText text-sm font-bold mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 ${
                    errors.email ? "border-red-500" : "focus:ring-primary"
                  } bg-gray-200`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-red-500 text-xs italic mt-1"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-lighterText text-sm font-bold mb-2"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 ${
                    errors.subject ? "border-red-500" : "focus:ring-primary"
                  } bg-gray-200`}
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    className="text-red-500 text-xs italic mt-1"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lighterText text-sm font-bold mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={7}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 ${
                    errors.message ? "border-red-500" : "focus:ring-primary"
                  } bg-gray-200 resize-y`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                ></textarea>
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-red-500 text-xs italic mt-1"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message <Send className="ml-2" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
