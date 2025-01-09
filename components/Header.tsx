"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import UnderlineSpan from "./UnderlineSpan";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = ["Skills", "Projects", "Contact"];

  return (
    <header className="fixed w-full z-50 bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          JD
        </Link>
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="dark:text-gray-200"
            >
              <UnderlineSpan lineHeight="5px">{item}</UnderlineSpan>
            </Link>
          ))}
          {mounted && <DarkModeToggle />}
        </nav>
        <div className="md:hidden flex items-center">
          {mounted && <DarkModeToggle />}
          <button onClick={() => setIsOpen(!isOpen)} className="ml-4">
            {isOpen ? (
              <X className="w-6 h-6 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 dark:text-white" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-lg z-50 h-screen"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-800 dark:text-white"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col h-full justify-center items-center space-y-12 pt-16">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-3xl hover:text-purple-400 transition-colors transform hover:scale-110 dark:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <UnderlineSpan lineHeight="2px" className="text-3xl">
                  {item}
                </UnderlineSpan>
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}
