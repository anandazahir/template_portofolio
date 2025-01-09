"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "GraphQL", level: 75 },
    { name: "Node.js", level: 70 },
  ];

  return (
    <motion.section
      id="skills"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 to-pink-600"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
            {hoveredSkill === skill.name && (
              <motion.p
                className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {getSkillDescription(skill.name)}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function getSkillDescription(skill: string): string {
  const descriptions: { [key: string]: string } = {
    React: "Building efficient and reusable user interfaces",
    "Next.js": "Creating server-side rendered and static websites",
    TypeScript: "Developing type-safe and scalable applications",
    "Tailwind CSS": "Rapidly building custom user interfaces",
    GraphQL: "Efficiently querying and manipulating data",
    "Node.js": "Building scalable server-side applications",
  };
  return descriptions[skill] || "";
}
