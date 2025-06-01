// src/pages/AboutUs.tsx

import React from "react";
import { motion } from "framer-motion";
import creator1 from "../assets/creator1.jpg";
import creator2 from "../assets/creator2.jpg";
import creator3 from "../assets/creator3.jpg";
import creator4 from "../assets/creator4.jpg";

const AboutUs: React.FC = () => {
  return (
    <motion.div
      className="min-h-[calc(100vh-200px)] py-16 container-custom"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-primary-600 text-center mb-12">
        About ApnaWaqeel
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
        <img
          src={creator1}
          alt="Founder 1"
          className="w-48 h-48 rounded-full shadow-lg object-cover"
        />
        <img
          src={creator2}
          alt="Founder 2"
          className="w-48 h-48 rounded-full shadow-lg object-cover"
        />
        <img
          src={creator3}
          alt="Founder 3"
          className="w-48 h-48 rounded-full shadow-lg object-cover"
        />
        <img
          src={creator4}
          alt="Founder 4"
          className="w-48 h-48 rounded-full shadow-lg object-cover"
        />
      </div>

      <div className="prose prose-lg mx-auto text-gray-700">
        <p>
          Meet the minds behind <strong>ApnaWaqeel</strong>. From childhood they
          dreamed of pursuing an LLB—yet their parents encouraged a degree in
          BSAI. Today, they’re marrying both passions: bringing legal expertise
          into the world of artificial intelligence.
        </p>

        <blockquote>
          <p>“Better call Saul!”</p>
          <footer>
            — Saul Goodman, <cite>Better Call Saul</cite>
          </footer>
        </blockquote>

        <blockquote>
          <p>“I’m the guy who’s gonna win this one for you.”</p>
          <footer>
            — Saul Goodman, <cite>Better Call Saul</cite>
          </footer>
        </blockquote>
      </div>
    </motion.div>
  );
};

export default AboutUs;
