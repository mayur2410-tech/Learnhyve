import { motion, useTransform } from "framer-motion";
import logo from "../assets/card-back-logo.png";
import { useState, useEffect } from "react";

const SkillCard = ({ skill, index, scrollProgress }) => {
  const [hasFlipped, setHasFlipped] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Define xOffset for 1x4 row (grid positions) with increased gaps
  const xOffsetValues = [-550, -185, 180, 550];
  const xOffset = xOffsetValues[index];
  const yOffset = 0

  // Check session storage to determine if animation should run
  useEffect(() => {
    const hasAnimated = sessionStorage.getItem(`skillCardAnimated_${skill.title}`);
    if (!hasAnimated) {
      setShouldAnimate(true);
    } else {
      setHasFlipped(true); // Skip animation if already flipped
    }
  }, [skill.title]);

  // Track scroll progress to trigger flip
  useEffect(() => {
    if (!shouldAnimate) return;

    const unsubscribe = scrollProgress.onChange((value) => {
      if (value > 0.2 && !hasFlipped) { // Lower threshold to ensure trigger
        setHasFlipped(true);
        sessionStorage.setItem(`skillCardAnimated_${skill.title}`, "true");
      }
    });
    return () => unsubscribe();
  }, [scrollProgress, hasFlipped, shouldAnimate, skill.title]);

  // Scroll-based animation transforms (very slow flipping)
  const x = useTransform(scrollProgress, [0, 0.5, 1], [0, xOffset, xOffset], { clamp: true });
  const y = useTransform(scrollProgress, [0, 0.5, 1], [0, yOffset, yOffset], { clamp: true });
  const rotateY = useTransform(scrollProgress, [0.3, 1.8], [0, 180], { clamp: true });
  const opacity = useTransform(scrollProgress, [0, 0.5, 1], [0.7, 0.85, 1], { clamp: true });

  return (
    <motion.div
      className="absolute w-[20.625rem] h-[18.25rem] rounded-lg shadow-lg perspective"
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
          className="w-32 h-32 object-contain opacity-50"
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
          className={`${skill.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-md`}
          whileHover={{
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            transition: { rotate: { duration: 0.5, repeat: Infinity } },
          }}
        >
          <motion.span
            className="text-4xl"
            initial={{ scale: shouldAnimate ? 0 : 1 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: shouldAnimate ? index * 0.3 : 0 }}
          >
            {skill.icon}
          </motion.span>
        </motion.div>

        <motion.h3
          className={`text-xl font-semibold mb-2 ${skill.iconColor} hittar text-left`}
          initial={{ opacity: shouldAnimate ? 0 : 1, x: shouldAnimate ? -20 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: shouldAnimate ? index * 0.3 + 0.2 : 0 }}
        >
          {skill.title}
        </motion.h3>

        <motion.p
          className="text-muted-foreground mb-4 text-left"
          initial={{ opacity: shouldAnimate ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldAnimate ? index * 0.3 + 0.4 : 0 }}
        >
          {skill.description}
        </motion.p>

        <motion.button
          className="mt-auto p-0 h-auto font-semibold text-primary hover:underline text-left"
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