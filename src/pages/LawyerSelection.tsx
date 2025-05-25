import { Scale as Scales, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LawyerSelection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-200px)] flex flex-col justify-center"
    >
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            What type of legal assistance do you need?
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Select the appropriate legal domain for your case so we can provide the most relevant guidance.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border-2 border-transparent hover:border-civil-500"
            >
              <Link to="/chat/civil" className="block h-full">
                <div className="p-8 flex flex-col items-center">
                  <div className="bg-civil-500 text-white p-4 rounded-full inline-flex mb-6">
                    <FileText size={40} />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-civil-700">Civil Law</h2>
                  <p className="text-gray-600 mb-6 text-center">
                    For disputes between individuals or organizations, including contracts, property, family law, personal injury, and more.
                  </p>
                  <span className="btn-primary bg-civil-500 hover:bg-civil-700">
                    Get Civil Legal Help
                  </span>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border-2 border-transparent hover:border-criminal-500"
            >
              <Link to="/chat/criminal" className="block h-full">
                <div className="p-8 flex flex-col items-center">
                  <div className="bg-criminal-500 text-white p-4 rounded-full inline-flex mb-6">
                    <Scales size={40} />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-criminal-700">Criminal Law</h2>
                  <p className="text-gray-600 mb-6 text-center">
                    For cases involving alleged violations of public law, including investigations, charges, pleas, trials, and sentencing.
                  </p>
                  <span className="btn-primary bg-criminal-500 hover:bg-criminal-700">
                    Get Criminal Legal Help
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 text-sm text-gray-500"
          >
            Note: This AI provides general legal information and not specific legal advice. Always consult with a licensed attorney for your specific case.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default LawyerSelection;