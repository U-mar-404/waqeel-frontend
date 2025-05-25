// src/pages/TermsOfService.tsx

import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => (
  <motion.div
    className="min-h-[calc(100vh-200px)] py-16 bg-gray-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container-custom max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold text-primary-600 text-center mb-2">
        Terms of Service
      </h1>
      <p className="text-gray-500 text-sm text-center mb-8">
        Last updated: May 23, 2025
      </p>

      {/* Section 1 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          1. Acceptance of Terms
        </h2>
        <p className="mt-2 text-gray-700">
          By using this prototype Service, you affirm that you have read,
          understand, and agree to these Terms of Service and any future
          modifications. You also agree that your use of the Service will
          comply with all applicable laws and regulations.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          2. Prototype and Experimental Nature
        </h2>
        <p className="mt-2 text-gray-700">
          The Service you are accessing is a prototype under active
          development. It may contain bugs, inaccuracies, or other issues, and
          may produce incorrect or incomplete results. We make no
          representations or warranties regarding the completeness,
          reliability, or accuracy of any information provided through the
          Service.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          3. No Warranty
        </h2>
        <p className="mt-2 text-gray-700">
          THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS,
          WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES OF ANY KIND, INCLUDING, BUT
          NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. WE DO NOT WARRANT
          THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          4. Limitation of Liability
        </h2>
        <p className="mt-2 text-gray-700">
          TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE
          COMPANY, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR
          LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING, BUT NOT
          LIMITED TO, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
          INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR
          USE OF, OR INABILITY TO ACCESS OR USE, THE SERVICE.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          5. Professional Advice Disclaimer
        </h2>
        <p className="mt-2 text-gray-700">
          The Service may provide general information that could be construed
          as legal, medical, financial, or other professional advice. Such
          information is for educational or informational purposes only and
          should not be relied upon as a substitute for consultation with
          qualified professionals. For specific advice tailored to your
          situation, please seek guidance from a licensed professional.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          6. User Conduct
        </h2>
        <p className="mt-2 text-gray-700">You agree not to:</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Use the Service in any unlawful manner.</li>
          <li>Interfere with or disrupt the integrity or performance of the Service.</li>
          <li>Attempt to gain unauthorized access to any portion of the Service or related systems.</li>
          <li>Upload or transmit viruses, worms, or other harmful code.</li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          7. Intellectual Property
        </h2>
        <p className="mt-2 text-gray-700">
          All content, features, and functionality of the Service, including
          text, graphics, logos, icons, and software, are the exclusive
          property of the Company or its licensors and are protected by
          copyright, trademark, and other intellectual property laws. You may
          not reproduce, distribute, modify, or create derivative works of any
          content without our prior written consent.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          8. Termination
        </h2>
        <p className="mt-2 text-gray-700">
          We reserve the right to suspend or terminate your access to all or
          part of the Service at any time, with or without notice, for any
          conduct that we, in our sole discretion, believe violates this
          Agreement or is harmful to other users, us, or third parties.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          9. Changes to Terms
        </h2>
        <p className="mt-2 text-gray-700">
          We may modify these Terms at any time. We will post the updated
          Terms on this page and update the "Last updated" date. Your
          continued use of the Service after any changes become effective
          constitutes your acceptance of the new Terms.
        </p>
      </section>

      {/* Section 10 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          10. Governing Law and Jurisdiction
        </h2>
        <p className="mt-2 text-gray-700">
          This Agreement shall be governed by and construed in accordance with
          the laws of Pakistan, without regard to its conflict of law
          principles. You agree to submit to the personal jurisdiction of the
          courts located in Pakistan for the resolution of any disputes arising
          out of or relating to this Agreement or the Service.
        </p>
      </section>

      {/* Section 11 */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          11. Entire Agreement
        </h2>
        <p className="mt-2 text-gray-700">
          This Agreement constitutes the entire agreement between you and the
          Company regarding your use of the Service and supersedes all prior
          or contemporaneous communications and proposals, whether oral or
          written.
        </p>
      </section>

      {/* Section 12 */}
      <section>
        <h2 className="text-2xl font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          12. Contact Information
        </h2>
        <p className="mt-2 text-gray-700">
          If you have any questions or concerns about these Terms, please
          contact us at:<br/>
          <strong>ApnaWaqeel Air University Islamabad</strong><br/>
          Email: <a href="mailto:aapnawaqeel@gmail.com" className="text-primary-600 hover:underline">aapnawaqeel@gmail.com</a><br/>
          Website: <a href="https://aapnawaqeel.site" className="text-primary-600 hover:underline">https://aapnawaqeel.site</a>
        </p>
      </section>
    </div>
  </motion.div>
);

export default TermsOfService;
