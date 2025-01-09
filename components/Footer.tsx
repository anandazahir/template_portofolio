import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-100 dark:bg-gray-800 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.p
          className="text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Ananda Zahir. Crafted with passion and
          code.
        </motion.p>
      </div>
    </motion.footer>
  );
}
