import { motion, useTransform } from "framer-motion";
import logo from "../assets/card-back-logo.png";
import { useState, useEffect } from "react";

// Define a utility hook to detect screen width with more breakpoints
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    isMobile: window.innerWidth <= 768,
    isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
    isDesktop: window.innerWidth > 1024
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isMobile: window.innerWidth <= 768,
        isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
        isDesktop: window.innerWidth > 1024
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

const SkillCard = ({ skill, index, scrollProgress }) => {
  const { isMobile, isTablet } = useScreenSize();
  const [hasFlipped, setHasFlipped] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Define responsive dimensions
  const cardWidth = isMobile ? "16rem" : isTablet ? "18rem" : "20.625rem";
  const cardHeight = isMobile ? "14rem" : isTablet ? "16rem" : "18.25rem";

  // Define grid positions with better spacing for different screen sizes
  const xOffsetValues = isMobile 
    ? [-90, 90] 
    : isTablet 
      ? [-250, -120, 120, 250] 
      : [-550, -185, 180, 550];
  
  const yOffsetValues = isMobile 
    ? [-160, 20] 
    : isTablet 
      ? [-80, 80] 
      : [0];

  // Calculate positions
  const xOffset = xOffsetValues[isMobile ? index % 2 : isTablet ? index % 4 : index];
  const yOffset = isMobile 
    ? yOffsetValues[Math.floor(index / 2)] 
    : isTablet 
      ? yOffsetValues[Math.floor(index / 4)] 
      : 0;

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem(`skillCardAnimated_${skill.title}`);
    if (!hasAnimated) {
      setShouldAnimate(true);
    } else {
      setHasFlipped(true);
    }
  }, [skill.title]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const unsubscribe = scrollProgress.onChange((value) => {
      if (value > 0.2 && !hasFlipped) {
        setHasFlipped(true);
        sessionStorage.setItem(`skillCardAnimated_${skill.title}`, "true");
      }
    });
    return () => unsubscribe();
  }, [scrollProgress, hasFlipped, shouldAnimate, skill.title]);

  const x = useTransform(scrollProgress, [0, 0.5, 1], [0, xOffset, xOffset], { clamp: true });
  const y = useTransform(scrollProgress, [0, 0.5, 1], [0, yOffset, yOffset], { clamp: true });
  const rotateY = useTransform(scrollProgress, [0.3, 1.8], [0, 180], { clamp: true });
  const opacity = useTransform(scrollProgress, [0, 0.5, 1], [0.7, 0.85, 1], { clamp: true });

  return (
    <motion.div
      className={`absolute rounded-lg shadow-lg  perspective ${
        isMobile ? "w-[11rem] h-[11rem]" : 
        isTablet ? "w-[18rem] h-[16rem]" : 
        "w-[20.625rem] h-[18.25rem] "
      }`}
      style={{
        transformStyle: "preserve-3d",
        x: hasFlipped ? xOffset : x,
        y: hasFlipped ? yOffset : y,
        rotateY: hasFlipped ? 180 : rotateY,
        opacity: hasFlipped ? 1 : opacity,
        zIndex: 4 - index,
      }}
      initial={{ rotateY: 0, y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: shouldAnimate
          ? { type: "spring", stiffness: 100, damping: 15, delay: index * 0.2 }
          : { duration: 0 },
      }}
      transition={{ duration: 1.5, delay: index * 0.3, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
    >
    
      

      {/* Back Side */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg"
        style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        whileHover={{ boxShadow: "0px 10px 30px rgba(0,0,0,0.3)", transition: { duration: 0.3 } }}
      >
        <motion.img
          src={logo}
          alt="LearnHyve Logo"
          className={`object-contain opacity-50 ${
            isMobile ? "w-[100px] h-[100px]" : 
            isTablet ? "w-28 h-28" : 
            "w-32 h-32"
          }`}
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        />
      </motion.div>

      {/* Front Side */}
      <motion.div
        className="absolute inset-0 flex flex-col h-full p-4 bg-white/80 dark:bg-gray-900/80 rounded-lg"
        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        whileHover={{ boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
      >
        <motion.div
          className={`${skill.color} ${
            isMobile ? "w-12 h-12" : 
            isTablet ? "w-14 h-14" : 
            "w-16 h-16"
          } rounded-2xl flex items-center justify-center mb-2 shadow-md`}
          whileHover={{
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            transition: { rotate: { duration: 0.5, repeat: Infinity } },
          }}
        >
          <motion.span
            className={`${
              isMobile ? "text-3xl" : 
              isTablet ? "text-3xl" : 
              "text-4xl"
            }`}
            initial={{ scale: shouldAnimate ? 0 : 1 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: shouldAnimate ? index * 0.3 : 0 }}
          >
            {skill.icon}
          </motion.span>
        </motion.div>

        <motion.h3
          className={`${
            isMobile ? "text-sm" : 
            isTablet ? "text-xl" : 
            "text-xl"
          } font-semibold mb-2 ${skill.iconColor} hittar text-left`}
          initial={{ opacity: shouldAnimate ? 0 : 1, x: shouldAnimate ? -20 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: shouldAnimate ? index * 0.3 + 0.2 : 0 }}
        >
          {skill.title}
        </motion.h3>

        <motion.p
          className={`text-muted-foreground mb-4 text-left ${
            isMobile ? "text-xs" : 
            isTablet ? "text-base" : 
            "text-base"
          }`}
          initial={{ opacity: shouldAnimate ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldAnimate ? index * 0.3 + 0.4 : 0 }}
        >
          {skill.description}
        </motion.p>

        <motion.button
          className={`mt-auto p-0 h-auto font-semibold text-primary hover:underline text-left ${
            isMobile ? "text-sm" : 
            isTablet ? "text-base" : 
            "text-base"
          }`}
          whileHover={{ scale: 1.1, x: 10, transition: { type: "spring", stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;