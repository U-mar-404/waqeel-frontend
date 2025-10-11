// src/pages/ContactUs.tsx

import React from "react";
import { motion } from "framer-motion";
import { Scale, Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUs: React.FC = () => (
  <motion.div
    className="min-h-[calc(100vh-200px)] py-16 bg-gray-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container-custom max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
      {/* Header */}
      <div className="flex items-center justify-center mb-8 space-x-2">
        <Scale size={28} className="text-primary-600" />
        <h1 className="text-3xl font-bold text-primary-600">Contact Us</h1>
      </div>

      {/* Office Info */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold bg-gray-100 px-4 py-2 rounded-lg inline-block mb-4">
          Office Information
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center space-x-2">
            <MapPin size={20} className="text-accent-500" />
            <span>Air University Islamabad</span>
          </li>
          <li className="flex items-center space-x-2">
            <Clock size={20} className="text-accent-500" />
            <span>Mon–Fri, 9 am–4 pm</span>
          </li>
        </ul>
      </section>

      {/* Team Profiles */}
      <section>
        <h2 className="text-2xl font-semibold bg-gray-100 px-4 py-2 rounded-lg inline-block mb-6">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Developer 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-1">Muhammad Umar</h3>
            <p className="text-gray-600 mb-4">AI Engineer</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-accent-500" />
                <a
                  href="mailto:umarabdullahumar@gmail.com"
                  className="hover:underline"
                >
                  umarabdullahumar@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-accent-500" />
                <a href="tel:+923303186000" className="hover:underline">
                  +92 330 3186000
                </a>
              </li>
            </ul>
          </div>

          {/* Developer 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-1">Malik Moeez Zafar</h3>
            <p className="text-gray-600 mb-4">AI Engineer</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-accent-500" />
                <a
                  href="mailto:Moeezzafar0000@gmail.com"
                  className="hover:underline"
                >
                  Moeezzafar0000@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-accent-500" />
                <a href="tel:+923122312004" className="hover:underline">
                  +92 312 2312004
                </a>
              </li>
            </ul>
          </div>

          {/* Developer 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-1">Haris Khalid</h3>
            <p className="text-gray-600 mb-4">AI Engineer</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-accent-500" />
                <a
                  href="mailto:harry_1110@icloud.com"
                  className="hover:underline"
                >
                  harry_1110@icloud.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-accent-500" />
                <a href="tel:+923459999977" className="hover:underline">
                  +92 345 9999977
                </a>
              </li>
            </ul>
          </div>

          {/* Developer 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-1">Abdul Moiz Ali</h3>
            <p className="text-gray-600 mb-4">AI Engineer</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-accent-500" />
                <a
                  href="mailto:231239@students.au.edu.pk"
                  className="hover:underline"
                >
                  231239@students.au.edu.pk
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-accent-500" />
                <a href="tel:+923405196393" className="hover:underline">
                  +92 340 5196393
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </motion.div>
);

export default ContactUs;
