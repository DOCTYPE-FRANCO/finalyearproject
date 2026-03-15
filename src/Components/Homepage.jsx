import React, { useEffect, useRef } from "react";
import Robot from "../assets/robot.svg";
import Access from "../assets/Access.svg";
import Secure from "../assets/secure.svg";
import Herosection from "./Herosection";
import { motion, useInView, useAnimation } from "framer-motion";

const features = [
  { icon: Secure, label: "Secure Digital Voting" },
  { icon: Robot,  label: "Automated Vote Count" },
  { icon: Access, label: "Multi-Level Access"    },
];

const steps = [
  {
    number: "01",
    title: "Create Election",
    description: "Admin configures positions, candidates, and voting timelines.",
  },
  {
    number: "02",
    title: "Verify Voters",
    description: "Identity is confirmed via government-issued ID or credentials.",
  },
  {
    number: "03",
    title: "Cast Vote Securely",
    description: "Each ballot is encrypted end-to-end before submission.",
  },
  {
    number: "04",
    title: "Auto Generated Results",
    description: "Votes are automatically collated once the session closes.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function FeatureCard({ icon, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="flex flex-col items-center gap-4 w-[190px] h-[170px] justify-center
                 bg-white rounded-2xl border border-gray-100
                 shadow-lg shadow-gray-200 hover:shadow-blue-100
                 hover:border-blue-200 transition-all duration-300 cursor-default"
    >
      <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-50 rounded-xl">
        <img src={icon} alt={label} className="w-[32px] h-[32px]" />
      </div>
      <p className="text-sm font-semibold text-gray-800 text-center leading-snug px-3">
        {label}
      </p>
    </motion.div>
  );
}

function StepCard({ number, title, description, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="relative w-[230px] min-h-[230px] bg-gray-50 border border-gray-100
                 rounded-2xl p-6 flex flex-col gap-3 overflow-hidden
                 hover:shadow-xl hover:shadow-blue-100 hover:border-blue-200
                 transition-all duration-300"
    >
      {/* Ghost number background */}
      <span className="absolute top-3 right-4 text-6xl font-bold text-blue-100 select-none leading-none">
        {number}
      </span>

      {/* Accent bar */}
      <div className="w-8 h-[3px] bg-blue-600 rounded-full" />

      <p className="text-base font-semibold text-gray-900 leading-snug max-w-[85%]">
        {title}
      </p>
      <p className="text-sm text-gray-500 font-normal leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function Homepage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  return (
    <div className="pt-24 md:pt-32 bg-white overflow-x-hidden">
      <Herosection />

      {/* Feature Cards */}
      <div className="flex flex-wrap justify-center gap-5 mt-20 px-6">
        {features.map((f, i) => (
          <FeatureCard key={f.label} icon={f.icon} label={f.label} delay={i * 0.15} />
        ))}
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3 mt-24 mb-12 px-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">
          Process
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          How It Works
        </h2>
        <p className="text-base text-gray-500 max-w-md leading-relaxed">
          A simple four-step process from setup to results — built for trust and transparency.
        </p>
      </div>

      {/* Step Cards */}
      <motion.div
        id="How"
        ref={ref}
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.18 },
          },
        }}
        className="flex flex-wrap justify-center gap-5 px-6 pb-24 max-w-5xl mx-auto"
      >
        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Homepage;