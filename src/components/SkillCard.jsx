


import { motion, useTransform, useSpring } from "framer-motion";
import logo from "../assets/card-back-logo.png";

const SkillCard = ({ skill, index, scrollProgress }) => {
  // Define xOffset for 1x4 row (grid positions) with increased gaps
  const xOffsetValues = [-550, -185, 180, 550];
  const xOffset = xOffsetValues[index];
  const yOffset = 300;

  // Scroll-based animation transforms
  const x = useTransform(scrollProgress, [0, 0.5, 1], [0, xOffset, xOffset]);
  const y = useTransform(scrollProgress, [0, 0.5, 1], [0, yOffset, yOffset]);
  const rotateY = useTransform(scrollProgress, [0, 0.5, 1], [0, 0, 180]);
  const opacity = useTransform(scrollProgress, [0, 0.5, 1], [0.7, 0.85, 1]);

  // Enhanced scroll-based animation transforms with spring physics
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  // Add scale animation based on scroll
  const scale = useTransform(scrollProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 1]);
  const springScale = useSpring(scale, springConfig);

  return (
    <motion.div
      className="absolute w-[20.625rem] h-[18.25rem] mb-96 rounded-lg shadow-lg perspective"
      style={{
        transformStyle: "preserve-3d",
        x: springX,
        y: springY,
        rotateY: springRotateY,
        scale: springScale,
        opacity,
        zIndex: 4 - index,
      }}
      initial={{ rotateY: 0, scale: 0.8 }}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.3, 
        ease: [0.6, 0.01, -0.05, 0.9]
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
    >
      {/* Back Side */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-lg"
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        whileHover={{
          boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
          transition: { duration: 0.2 }
        }}
      >
        <motion.img
          src={logo}
          alt="LearnHyve Logo"
          className="w-32 h-32 object-contain opacity-50"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </motion.div>

      {/* Front Side */}
      <motion.div
        className="absolute inset-0 flex flex-col h-full p-4 bg-white/80 dark:bg-gray-900/80 rounded-lg"
        style={{
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        whileHover={{
          boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <motion.div
          className={`${skill.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-md`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="text-4xl"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {skill.icon}
          </motion.span>
        </motion.div>
        <motion.h3 
          className={`text-xl font-semibold mb-2 ${skill.iconColor} text-left`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.5 }}
        >
          {skill.title}
        </motion.h3>
        <motion.p 
          className="text-muted-foreground mb-4 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.7 }}
        >
          {skill.description}
        </motion.p>
        <motion.button 
          className="mt-auto p-0 h-auto font-semibold text-primary hover:underline text-left"
          whileHover={{ scale: 1.1, x: 10 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.9 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
