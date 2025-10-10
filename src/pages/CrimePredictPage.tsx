// src/pages/CrimePredictPage.tsx

import React, { useState, useEffect } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Prediction response includes both RF and LR predictions
interface PredictResponse {
  rf_prediction: number; // 0 or 1
  lr_prediction: number; // 0 or 1
}

// Field definitions for labels and tooltips
const fieldDefinitions: Record<
  string,
  { label: string; info: string; type: "text" | "number" | "select" }
> = {
  Victim_Age: {
    label: "Victim Age",
    info: "Age of the victim in years.",
    type: "number",
  },
  Perpetrator_Age: {
    label: "Perpetrator Age",
    info: "Age of the perpetrator in years. If unknown, enter 0.",
    type: "number",
  },
  City: {
    label: "City",
    info:
      "City where the crime occurred. Select from the dropdown; if not listed, choose 'Other'.",
    type: "select",
  },
  State: {
    label: "State",
    info: "State where the crime occurred. Select from the dropdown.",
    type: "select",
  },
  Crime_Type: {
    label: "Crime Type",
    info: "Type of crime (e.g., 'Murder or Manslaughter').",
    type: "select",
  },
  Victim_Sex: {
    label: "Victim Sex",
    info: "Sex of the victim (Male, Female, or Unknown).",
    type: "select",
  },
  Perpetrator_Sex: {
    label: "Perpetrator Sex",
    info: "Sex of the perpetrator (Male, Female, or Unknown).",
    type: "select",
  },
  Relationship: {
    label: "Relationship",
    info:
      "Relationship between victim & perpetrator (e.g., Stranger, Acquaintance, Wife, etc.).",
    type: "select",
  },
  Weapon: {
    label: "Weapon",
    info:
      "Weapon used (e.g., Handgun, Knife, Unknown, etc.). Select from the dropdown.",
    type: "select",
  },
};

// Options for dropdown fields
const options: Record<string, string[]> = {
  City: [
    "Other",
    "Los Angeles",
    "New York",
    "Cook",
    "Wayne",
    "Harris",
    "Philadelphia",
    "Dallas",
    "Jefferson",
    "Baltimore city",
    "Dade",
  ],
  State: [
    "California",
    "Texas",
    "New York",
    "Florida",
    "Michigan",
    "Illinois",
    "Pennsylvania",
    "Georgia",
    "North Carolina",
    "Louisiana",
    "Ohio",
    "Maryland",
    "Virginia",
    "Tennessee",
    "Missouri",
    "New Jersey",
    "Arizona",
    "South Carolina",
    "Indiana",
    "Alabama",
    "Oklahoma",
    "Washington",
    "District of Columbia",
    "Arkansas",
    "Colorado",
    "Kentucky",
    "Mississippi",
    "Wisconsin",
    "Massachusetts",
    "Nevada",
    "Connecticut",
    "New Mexico",
    "Oregon",
    "Minnesota",
    "Kansas",
    "West Virginia",
    "Utah",
    "Iowa",
    "Alaska",
    "Hawaii",
    "Nebraska",
    "Rhode Island",
    "Delaware",
    "Idaho",
    "Maine",
    "New Hampshire",
    "Wyoming",
    "Montana",
    "South Dakota",
    "Vermont",
  ],
  Weapon: [
    "Handgun",
    "Knife",
    "Blunt Object",
    "Firearm",
    "Unknown",
    "Shotgun",
    "Rifle",
    "Strangulation",
    "Fire",
    "Suffocation",
    "Gun",
    "Drugs",
    "Drowning",
    "Explosives",
    "Poison",
  ],
  Crime_Type: ["Murder or Manslaughter", "Manslaughter by Negligence"],
  Victim_Sex: ["Male", "Female", "Unknown"],
  Perpetrator_Sex: ["Male", "Female", "Unknown"],
  Relationship: [
    "Unknown",
    "Acquaintance",
    "Stranger",
    "Wife",
    "Friend",
    "Girlfriend",
    "Son",
    "Family",
    "Husband",
    "Daughter",
    "Boyfriend",
    "Neighbor",
    "Brother",
    "Father",
    "Mother",
    "In-Law",
    "Common-Law Wife",
    "Ex-Wife",
    "Common-Law Husband",
    "Boyfriend/Girlfriend",
    "Stepfather",
    "Sister",
    "Stepson",
    "Stepdaughter",
    "Ex-Husband",
    "Employer",
    "Employee",
    "Stepmother",
  ],
};

const CrimePredictPage: React.FC = () => {
  // Form state
  const [formValues, setFormValues] = useState<Record<string, string>>(
    Object.fromEntries(Object.keys(fieldDefinitions).map((k) => [k, ""]))
  );
  const [rfResult, setRfResult] = useState<number | null>(null);
  const [lrResult, setLrResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    // Hide footer if present
    const footer = document.querySelector("footer");
    if (footer) footer.style.display = "none";
    return () => {
      if (footer) footer.style.display = "";
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRfResult(null);
    setLrResult(null);

    // Build payload: convert numeric fields to number, others as string
    const payload: Record<string, string | number> = {};
    Object.entries(fieldDefinitions).forEach(([key, def]) => {
      const raw = formValues[key].trim();
      if (def.type === "number") {
        payload[key] = Number(raw);
      } else {
        payload[key] = raw;
      }
    });

    try {
      const res = await fetch("https://web-production-e855.up.railway.app/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: PredictResponse = await res.json();
      setRfResult(data.rf_prediction);
      setLrResult(data.lr_prediction);
    } catch {
      setRfResult(-1);
      setLrResult(-1);
    } finally {
      setLoading(false);
    }
  };

  const renderResult = () => {
    if (rfResult === null || lrResult === null) return null;
    if (rfResult < 0 || lrResult < 0) {
      return (
        <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
          <p className="text-red-800 font-semibold">
            ❌ Error fetching prediction.
          </p>
        </div>
      );
    }
    return (
      <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-lg">
        <p className="text-green-800 font-semibold">Result:</p>
        <p className="mt-2 text-lg">
          According to Random Forest model:{" "}
          <span className="font-medium">
            {rfResult === 1
              ? "Your case will be solved."
              : "Your case will not be solved."}
          </span>
        </p>
        <p className="mt-2 text-lg">
          According to Logistic Regression model:{" "}
          <span className="font-medium">
            {lrResult === 1
              ? "Your case will be solved."
              : "Your case will not be solved."}
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="sticky top-0 z-20 flex items-center justify-between bg-white shadow px-4 py-3">
        <Link to="/" className="text-gray-500 hover:text-gray-700">
          <ArrowLeft size={24} />
        </Link>
        <h2 className="text-lg font-semibold text-primary-600">
          Crime Prediction
        </h2>
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-gray-500 hover:text-gray-700"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* FORM */}
      <main className="flex-1 px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg"
        >
          <p className="text-gray-600 mb-4">
            Note: This prediction is based on the “US Crime Dataset” from Kaggle. Results are for informational purposes only and may not reflect the actual outcome. Always verify with official sources.
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {Object.entries(fieldDefinitions).map(
              ([key, { label, info, type }]) => (
                <div key={key} className="relative group">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    {label}
                    <span
                      className="ml-1 text-gray-400 cursor-help"
                      title={info}
                    >
                      ⓘ
                    </span>
                  </label>
                  {type === "select" ? (
                    <select
                      name={key}
                      value={formValues[key]}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 bg-white"
                    >
                      <option value="" disabled>
                        Select {label}
                      </option>
                      {options[key].map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={type}
                      name={key}
                      value={formValues[key]}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                      placeholder={
                        type === "number" ? "e.g. 28" : `e.g. ${label}`
                      }
                    />
                  )}
                </div>
              )
            )}
            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-primary-700"
                } bg-primary-600 text-white px-6 py-2 rounded-full transition-colors`}
              >
                {loading ? "Predicting…" : "Predict Crime"}
              </button>
            </div>
          </form>
          {renderResult()}
        </motion.div>
      </main>

      {/* SIDE PANEL (DRAWER) */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-xl z-30 p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary-600">
                Field Information
              </h3>
              <button onClick={() => setDrawerOpen(false)}>
                <X size={24} />
              </button>
            </div>
            {Object.entries(fieldDefinitions).map(([key, { label, info }]) => (
              <div key={key} className="mb-6">
                <h4 className="font-medium text-gray-800 mb-2">{label}</h4>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{info}</p>
              </div>
            ))}
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CrimePredictPage;
