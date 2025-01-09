"use client";

import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Mesh } from "three";
import Loader from "./Loader";

const RotatingLetter = ({ letter }: { letter: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const rotation = Math.random() * 180 - 90; // Random rotation between -90 and 90 degrees

  return (
    <motion.span
      className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? { rotate: rotation } : { rotate: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      {letter}
    </motion.span>
  );
};

const Rotating3DObject = () => {
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  const size = Math.min(viewport.width, viewport.height) * 0.3;

  return (
    <mesh ref={meshRef} scale={[size, size, size]}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial color="#8B5CF6" metalness={0.6} roughness={0.2} />
    </mesh>
  );
};

export default function Hero({
  setIsLoading,
}: {
  setIsLoading: (loading: boolean) => void;
}) {
  const name = "Ananda Zahir";
  const [isLoading, setIsLoadingState] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingState(false);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <motion.section
      className="py-20 md:py-32 flex flex-col justify-center min-h-screen relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<Loader />}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
              castShadow
            />
            <Rotating3DObject />
            <OrbitControls enableZoom={false} enablePan={false} />
            <Environment preset="sunset" />
          </Canvas>
        </Suspense>
      </div>
      {!isLoading && (
        <div className="text-center relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {name.split("").map((letter, index) => (
              <RotatingLetter key={index} letter={letter} />
            ))}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Front-End Developer
          </motion.p>
          <motion.p
            className="max-w-2xl mx-auto mb-8 text-sm sm:text-base text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Crafting pixel-perfect, responsive, and intuitive web experiences.
            Specialized in React, Next.js, and cutting-edge front-end
            technologies.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { href: "https://github.com", icon: GitHub },
              { href: "https://linkedin.com", icon: Linkedin },
              { href: "mailto:john@example.com", icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform text-gray-700 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-400"
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </Link>
            ))}
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
