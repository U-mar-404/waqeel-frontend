// src/pages/GetStarted.tsx

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GetStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-200px)] flex flex-col justify-center"
    >
      <div className="container-custom py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6 text-primary-600 text-4xl font-bold"
          >
            Your Apna Legal Assistant!
          </motion.h1>

          {/* Quote Block */}
          <motion.blockquote
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative p-6 mb-8 bg-gray-100 border-l-4 border-primary-600 rounded-lg"
          >
            <p className="text-xl italic text-gray-800">
              “I believe that until proven guilty every man, woman, and child in this country is innocent.”
            </p>
            <footer className="mt-4 text-right text-gray-600 font-semibold">
              — Saul Goodman
            </footer>
          </motion.blockquote>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link to="/select" className="inline-flex items-center group">
              <span className="btn-primary flex items-center">
                Get Started
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
            <p className="text-gray-600">
              Get insights based on thousands of similar legal cases and precedents.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
            <p className="text-gray-600">
              Access legal help anytime, anywhere without scheduling appointments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Clear Explanations</h3>
            <p className="text-gray-600">
              Complex legal concepts explained in simple, understandable language.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GetStarted;
