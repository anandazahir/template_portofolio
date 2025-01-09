"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Review = {
  id: number;
  name: string;
  company: string;
  review: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Tech Innovators Inc.",
    review:
      "John's expertise in React and Next.js transformed our project. His attention to detail and commitment to delivering high-quality code exceeded our expectations.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Digital Solutions Co.",
    review:
      "Working with John was a pleasure. His deep understanding of front-end technologies and ability to solve complex problems made our collaboration incredibly smooth.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Creative Web Designs",
    review:
      "John's creativity and technical skills are unmatched. He brought our vision to life with stunning UI/UX and flawless functionality.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export default function ClientReviews() {
  return (
    <motion.section
      id="reviews"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Client Reviews
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Image
                src={review.avatar}
                alt={review.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {review.company}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "{review.review}"
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
