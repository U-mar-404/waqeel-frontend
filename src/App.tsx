import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';

import GetStarted      from './pages/GetStarted';
import LawyerSelection from './pages/LawyerSelection';
import ChatPage        from './pages/ChatPage';
import AboutUs         from './pages/AboutUs';
import TermsOfService  from './pages/TermsOfService';  // ← new import
import ContactUs from './pages/ContactUs';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"              element={<GetStarted />} />
          <Route path="/select"        element={<LawyerSelection />} />
          <Route path="/about-us"      element={<AboutUs />} />
          <Route path="/terms"         element={<TermsOfService />} />      {/* ← our new page */}
          <Route path="/chat/civil"    element={<ChatPage lawyerType="civil" />} />
          <Route path="/chat/criminal" element={<ChatPage lawyerType="criminal" />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
