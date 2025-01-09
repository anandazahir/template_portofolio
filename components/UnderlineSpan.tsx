import React, { useState } from "react";
import { motion } from "framer-motion";

type UnderlineSpanProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  lineWidth?: string;
  lineHeight?: string;
};

const UnderlineSpan: React.FC<UnderlineSpanProps> = ({
  children,
  className = "",
  onClick,
  lineWidth = "100%",
  lineHeight = "2px",
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) onClick();
  };

  return (
    <motion.span
      className={`font-bold focus-visible cursor-pointer ${className}`}
      onClick={handleClick}
      initial={{
        backgroundSize: `0% ${lineHeight}`,
        backgroundPosition: "center right",
      }}
      animate={
        isClicked
          ? {
              backgroundSize: `${lineWidth} ${lineHeight}`,
              backgroundPosition: "center left",
            }
          : {}
      }
      whileHover={{
        backgroundSize: `${lineWidth} ${lineHeight}`,
        backgroundPosition: "center left",
      }}
      whileFocus={{
        backgroundSize: `${lineWidth} ${lineHeight}`,
        backgroundPosition: "center left",
      }}
      whileTap={{
        backgroundSize: `${lineWidth} ${lineHeight}`,
        backgroundPosition: "center left",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        backgroundImage: "linear-gradient(to right, #a78bfa, #a78bfa)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center left",
        backgroundSize: `0% ${lineHeight}`,
      }}
    >
      {children}
    </motion.span>
  );
};

export default UnderlineSpan;

