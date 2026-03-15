import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const footerLinks = {
  Product: ["Features", "How It Works", "Security", "Pricing"],
  Company: ["About Us", "Blog", "Careers", "Press"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
};

const socials = [
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
  { icon: <FaGithub />, href: "#", label: "GitHub" },
  { icon: <FaEnvelope />, href: "#", label: "Email" },
];

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-14">

          {/* Brand */}
          <div className="flex flex-col gap-5 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">VoteSecure</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              A modern, transparent digital voting platform built for trust,
              security, and accessibility at every level.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600
                             flex items-center justify-center text-gray-400
                             hover:text-white transition-colors duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <p className="text-white text-sm font-semibold tracking-wide">
                  {category}
                </p>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-white
                                   transition-colors duration-200 hover:translate-x-1
                                   inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-900 rounded-2xl px-6 py-7 flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-5 mb-12">
          <div>
            <p className="text-white font-semibold text-base">Stay in the loop</p>
            <p className="text-gray-500 text-sm mt-1">
              Get product updates and election news delivered to your inbox.
            </p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-gray-800 text-sm text-white placeholder-gray-600
                         rounded-lg px-4 py-2.5 outline-none border border-gray-700
                         focus:border-blue-500 transition-colors duration-200
                         w-full sm:w-56"
            />
            <button
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm
                         font-semibold px-5 py-2.5 rounded-lg transition-colors
                         duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} VoteSecure. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
