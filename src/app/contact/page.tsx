"use client";
import React, { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen ">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16  pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Reach out to us for reliable petroleum products delivery across the
            country.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Send Us a Message
            </h2>

            {formStatus === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you for your message! We&apos;ll get back to you shortly.
              </div>
            )}

            {formStatus === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                There was an error sending your message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Delivery Inquiry">Delivery Inquiry</option>
                    <option value="Product Pricing">Product Pricing</option>
                    <option value="Schedule Delivery">Schedule Delivery</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className={`px-6 py-3 bg-blue-700 text-white rounded-md font-medium flex items-center gap-2 hover:bg-blue-800 transition ${
                  formStatus === "submitting"
                    ? "opacity-70 cursor-not-allowed"
                    : ""
                }`}
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Contact Information
            </h2>

            <div className="bg-blue-50 rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">
                Main Office
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Address:</p>
                    <p>Stockgap Depot Rumuolumeni,</p>
                    <p>Iwofe, Port Harcourt, Rivers State.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p>+234 8030590599</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p>priuzcaglobal@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Business Hours:</p>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Petroleum Products Delivered Quickly?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Our fleet of modern tankers ensures safe and timely delivery of
            petroleum products across the country.
          </p>
          <Link
            href="tel:+2348030590599"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-md font-medium hover:bg-gray-100 transition"
          >
            <Phone size={16} />
            Call Us Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
