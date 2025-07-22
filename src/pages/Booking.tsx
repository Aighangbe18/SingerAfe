// src/pages/Booking.tsx
import React, { useState } from "react";
import {
  ChevronRight,
  CheckCircle,
  CalendarClock,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Studio Recording Session",
    description:
      "Professional vocal or instrument recording in a state-of-the-art studio. Includes basic mixing.",
    price: "$85/hour",
    duration: "Min 2 hours",
  },
  {
    id: 2,
    name: "Custom Music Composition",
    description:
      "Original music tailored for your film, game, commercial, or personal project. Full ownership rights.",
    price: "Contact for Quote",
    duration: "Project-based",
  },
  {
    id: 3,
    name: "Live Performance (Solo/Duo)",
    description:
      "Book me for your event, concert, or private party. Covers travel within Lagos.",
    price: "Starting from $600",
    duration: "Min 2 hours",
  },
  {
    id: 4,
    name: "Online Music Production Lesson",
    description:
      "Personalized 1-on-1 lessons covering DAW fundamentals, mixing, mastering, or songwriting.",
    price: "$70/hour",
    duration: "1 hour",
  },
];

const Booking: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceId: "", // To store selected service ID
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
    if (!formData.serviceId) newErrors.serviceId = "Please select a service.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for the field being changed
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setFormData((prev) => ({ ...prev, serviceId: String(service.id) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real application, send this data to your backend/Formspree/Calendly API
      console.log("Booking Request Submitted:", { selectedService, formData });
      setIsSubmitted(true);
      // Reset form after submission if needed
      // setFormData({ name: '', email: '', phone: '', serviceId: '', message: '' });
      // setSelectedService(null);
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
        Book Your Session
      </motion.h1>

      <p className="text-center text-lg text-lighterText mb-10 max-w-3xl mx-auto">
        Ready to create something amazing? Browse my services and submit a
        booking request. For real-time availability and immediate confirmation,
        you can also use my integrated scheduling tool below.
      </p>

      {isSubmitted ? (
        <motion.div
          className="bg-cardBg text-lightText p-8 rounded-lg shadow-2xl text-center max-w-md mx-auto border border-gray-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <CheckCircle size={64} className="mx-auto mb-4 text-secondary" />
          <h2 className="text-3xl font-bold mb-3 font-headline">
            Booking Request Sent!
          </h2>
          <p className="text-lg text-lighterText">
            Thank you for reaching out. I'll review your request for{" "}
            <span className="font-semibold text-primary">
              {selectedService?.name || "a service"}
            </span>{" "}
            and get back to you within 1-2 business days.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 bg-primary hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition-colors transform hover:scale-105"
          >
            Make Another Request
          </button>
        </motion.div>
      ) : (
        <>
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-secondary font-headline">
              My Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className={`bg-cardBg p-6 rounded-lg shadow-lg border-2 ${
                    selectedService?.id === service.id
                      ? "border-primary shadow-xl"
                      : "border-gray-700"
                  } hover:border-primary transform hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                  onClick={() => handleServiceSelect(service)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + service.id * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2 font-body">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center text-lg text-primary font-semibold mb-2">
                    <DollarSign size={20} className="mr-2" />
                    <span>{service.price}</span>
                  </div>
                  <div className="flex items-center text-lg text-lighterText font-medium">
                    <CalendarClock size={20} className="mr-2" />
                    <span>{service.duration}</span>
                  </div>
                  {selectedService?.id === service.id && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-ring-sm"
                    >
                      Selected
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="bg-cardBg p-8 rounded-lg shadow-2xl max-w-3xl mx-auto border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-secondary font-headline">
              {selectedService
                ? `Request for: ${selectedService.name}`
                : "Submit Your Inquiry"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lighterText text-sm font-bold mb-2"
                >
                  Your Full Name <span className="text-red-500">*</span>
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
                  htmlFor="phone"
                  className="block text-lighterText text-sm font-bold mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-primary bg-gray-200"
                />
              </div>
              <div>
                <label
                  htmlFor="serviceId"
                  className="block text-lighterText text-sm font-bold mb-2"
                >
                  Selected Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceId"
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 ${
                    errors.serviceId ? "border-red-500" : "focus:ring-primary"
                  } `}
                  aria-invalid={errors.serviceId ? "true" : "false"}
                  aria-describedby={
                    errors.serviceId ? "service-error" : undefined
                  }
                >
                  <option value="">-- Select a Service --</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} ({service.price})
                    </option>
                  ))}
                </select>
                {errors.serviceId && (
                  <p
                    id="service-error"
                    className="text-red-500 text-xs italic mt-1"
                  >
                    {errors.serviceId}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lighterText text-sm font-bold mb-2"
                >
                  Tell me about your project or request (be specific!){" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
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
                Submit Booking Request <ChevronRight className="ml-2" />
              </button>
            </form>
          </motion.section>
        </>
      )}
    </div>
  );
};

export default Booking;
