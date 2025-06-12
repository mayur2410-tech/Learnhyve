import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/logoblack.png';
import { Link, useLocation } from 'react-router-dom';
import LottieAnimation from './LottieAnimation';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import SkillCard from './SkillCard';
import Navbar from './Navbar';

export const lifeChangingSkills = [
  {
    title: "Personal Branding",
    description: "Build a compelling personal brand that stands out in the competitive job market",
    icon: "🌟",
    color: "bg-pink-900",
    iconColor: "text-pink-500"
  },
  {
    title: "Emotional Intelligence",
    description: "Develop self-awareness and interpersonal skills for personal and professional growth",
    icon: "❤️",
    color: "bg-red-900",
    iconColor: "text-red-500"
  },
  {
    title: "Time Management",
    description: "Master productivity techniques to maximize your potential and reduce stress",
    icon: "⏰",
    color: "bg-teal-900",
    iconColor: "text-teal-500"
  },
  {
    title: "Leadership Development",
    description: "Cultivate leadership skills to inspire and guide teams effectively",
    icon: "🏆",
    color: "bg-indigo-900",
    iconColor: "text-indigo-500"
  }
];

export const workshops = [
  {
    title: "Communication Skill",
    description: "Master effective communication techniques for professional success",
    icon: "💬",
    color: "bg-orange-900",
    iconColor: "text-orange-500"
  },
  {
    title: "Money Management",
    description: "Learn essential financial planning and management skills",
    icon: "💰",
    color: "bg-green-900",
    iconColor: "text-green-500"
  },
  {
    title: "Stock Market & Investment",
    description: "Understand market dynamics and investment strategies",
    icon: "📈",
    color: "bg-blue-900",
    iconColor: "text-blue-500"
  },
  {
    title: "Problem Solving & Critical Thinking",
    description: "Develop analytical and strategic thinking abilities",
    icon: "💡",
    color: "bg-purple-900",
    iconColor: "text-purple-500"
  }
];

export const trendingSkills = [
  {
    title: "English Speaking",
    description: "Master conversational English and business communication for global opportunities",
    icon: "🗣️",
    color: "bg-yellow-900",
    iconColor: "text-yellow-500"
  },
  {
    title: "AI Tools",
    description: "Learn to leverage AI tools and platforms for enhanced productivity and innovation",
    icon: "🤖",
    color: "bg-cyan-900",
    iconColor: "text-cyan-500"
  },
  {
    title: "Robotics and AI",
    description: "Explore robotics fundamentals and artificial intelligence applications",
    icon: "🦾",
    color: "bg-violet-900",
    iconColor: "text-violet-500"
  },
  {
    title: "Yoga & Self Defense",
    description: "Combine mindful movement with practical self-defense techniques",
    icon: "🧘",
    color: "bg-rose-900",
    iconColor: "text-rose-500"
  }
];

const Workshop = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const headerRef = useRef(null);
  const blobsRef = useRef(null);
  const location = useLocation(); // Hook to track route changes

  // Refs for each section
  const lifeChangingRef = useRef(null);
  const workshopsRef = useRef(null);
  const trendingRef = useRef(null);

  // In-view detection
  const isLifeChangingInView = useInView(lifeChangingRef, { once: false, amount: 0.1 });
  const isWorkshopsInView = useInView(workshopsRef, { once: false, amount: 0.1 });
  const isTrendingInView = useInView(trendingRef, { once: false, amount: 0.1 });

  // Scroll progress for each section
  const { scrollYProgress: lifeChangingProgress } = useScroll({
    target: lifeChangingRef,
    offset: ["start center", "end start"],
  });
  const { scrollYProgress: workshopsProgress } = useScroll({
    target: workshopsRef,
    offset: ["start center", "end start"],
  });
  const { scrollYProgress: trendingProgress } = useScroll({
    target: trendingRef,
    offset: ["start center", "end start"],
  });

  // Transform scroll progress
  const lifeChangingScrollProgress = useTransform(lifeChangingProgress, [0, 0.4], [0, 1]);
  const workshopsScrollProgress = useTransform(workshopsProgress, [0, 0.4], [0, 1]);
  const trendingScrollProgress = useTransform(trendingProgress, [0, 0.4], [0, 1]);

  // Clear sessionStorage for card animations on route change
  useEffect(() => {
    // Clear all sessionStorage entries related to skill card animations
    Object.keys(sessionStorage).forEach((key) => {
      if (key.startsWith('skillCardAnimated_')) {
        sessionStorage.removeItem(key);
      }
    });
  }, [location.pathname]); // Trigger when route changes

  useEffect(() => {
    gsap.set(blobsRef.current, { perspective: 1000 });
    gsap.from(".background-blob", {
      scale: 0.5,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-container')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };



  return (
    <div
      className="relative dark:bg-black dark:text-white min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #431407 20%, #000 80%)',
        minHeight: '100vh', // Ensure it takes full viewport height
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%', // Cover entire area exactly
        backgroundAttachment: 'fixed',
      }}
      
    >
      <style jsx>{`
  :root {
    --bg-gradient-light-from: #fff1e6;
    --bg-gradient-light-to: white;
    --bg-gradient-dark-from: #431407;
    --bg-gradient-dark-to: #000;
    --primary-color: #ea761d;
    --primary-hover: #d87a1d;
    --muted-text: #64748b;
    --background: #ffffff;
    --border-color: #e5e7eb;
    --header-height: 4rem;
  }

  body {
    background: linear-gradient(
      to bottom,
      var(--bg-gradient-light-from),
      var(--bg-gradient-light-to),
      var(--bg-gradient-light-from)
    );
    overflow-x: hidden;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background: linear-gradient(
        to bottom,
        var(--bg-gradient-dark-from),
        var(--bg-gradient-dark-to),
        var(--bg-gradient-dark-from)
      );
    }
  }

  .background-blobs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }

  .background-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.2;
  }

  .blob-left {
    background-color: rgb(254, 202, 202);
    left: -25%;
    top: -25%;
    width: 50%;
    height: 50%;
  }

  .blob-right {
    background-color: rgb(254, 202, 202);
    right: -25%;
    bottom: -25%;
    width: 50%;
    height: 50%;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
      position: fixed;
      top: 5rem;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      padding: 1rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 100;
    }

    .nav-links.active {
      display: flex;
      animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .nav-links a {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid #e5e7eb;
    }

    .menu-toggle {
      display: block;
      z-index: 101;
    }

    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .header-section {
      padding-top: 6rem;
    }

    .header-title {
      font-size: 2.5rem;
      line-height: 1.2;
    }

    .section-title {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .header-title {
      font-size: 2rem;
    }

    .section-title {
      font-size: 1.75rem;
    }

    .container {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
`}</style>


      <Navbar />
      <div className="pt-14 md:pt-0">
      <div className="background-blobs" ref={blobsRef}>
        <div className="background-blob blob-left"></div>
        <div className="background-blob blob-right"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-16 py-8 md:py-16">
        <motion.section
          id="header-section"
          className="flex flex-col md:flex-row items-center gap-8 mb-12 md:mb-20"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex-1 space-y-4 md:space-y-6 z-10">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-orange-500 leading-tight header-title">
              Learn the highly <br /><span className="text-primary">essential skills</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground text-white max-w-xl">
              Discover the essential and soft skills often overlooked by schools and colleges. These skills are
              crucial not just for securing a great job, but for leading a successful and fulfilling life.
            </p>
            <button className="px-4 py-2 md:px-6 md:py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base">
              Explore Workshops
            </button>
          </div>
          <div className="flex-1 relative z-10 w-full md:w-auto">
            <LottieAnimation />
          </div>
        </motion.section>
      </div>

      {/* Life-Changing Skills Section */}
      <section ref={lifeChangingRef} 
        id="life-changing" 
         className="scroll-mt-28 relative min-h-screen -mt-32 md:-mt-72 bg-gradient-to-b from-transparent via-black/80 to-black snap-start">
        <div className="text-center mt-32 md:mt-60 pt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 inline-block relative section-title">
            The Life-Changing Skills
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-700 transform skew-x-12"></div>
          </h2>
        </div>
        <motion.div
className="sticky top-0 h-screen flex items-center pb-96 justify-center 
mt-0 md:-mt-44 lg:mt-0"
>
          {isLifeChangingInView &&
            lifeChangingSkills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                skill={skill}
                index={index}
                scrollProgress={lifeChangingScrollProgress}
              />
            ))}
        </motion.div>
        <div className="h-[20vh] md:h-[30vh]" />
      </section>

      {/* universe Section */}
      <section
  ref={workshopsRef}
  id='universe-skill'
  className="scroll-mt-28 relative min-h-screen bg-black snap-start
             mt-[25rem] md:-mt-[34.5rem] lg:-mt-[26.5rem] "
>
        <div className="text-center mb-8 md:mb-12 pt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 inline-block relative section-title">
            The Universal Skills
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-700 transform skew-x-12"></div>
          </h2>
        </div>
        <motion.div
className="sticky top-0 h-screen flex items-center pb-96 justify-center 
mt-0 md:-mt-52 lg:mt-0"
>
          {isWorkshopsInView &&
            workshops.map((skill, index) => (
              <SkillCard
                key={skill.title}
                skill={skill}
                index={index}
                scrollProgress={workshopsScrollProgress}
              />
            ))}
        </motion.div>
        <div className="h-[20vh] md:h-[30vh]" />
      </section>

      {/* Trending Skills Section */}
      <section
  ref={trendingRef}
  id='trending-skill'
  className="scroll-mt-28 relative min-h-screen bg-black snap-start
             mt-[25rem] md:-mt-[34.5rem] lg:-mt-[26.5rem]"
>
        <div className="text-center mb-8 md:mb-12 pt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 inline-block relative section-title">
            Trending Skills
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-700 transform skew-x-12"></div>
          </h2>
        </div>
        <motion.div
className="sticky top-0 h-screen flex items-center pb-96 justify-center 
mt-0 md:-mt-52 lg:mt-0"
>
          {isTrendingInView &&
            trendingSkills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                skill={skill}
                index={index}
                scrollProgress={trendingScrollProgress}
              />
            ))}
        </motion.div>
        <div className="h-[20vh] md:h-[30vh]" />
      </section>

      <footer className="bg-gray-100 text-gray-700 mt-[400px] md:mt-0">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      <div>
        <a href="worshop.html" className="inline-block mb-4">
          <img className="h-14 w-auto" src={logo} alt="learnhyve-logo" />
        </a>
        <p className="text-sm leading-6 text-gray-500">
          Revolutionizing education for a skilled India. Join us in our mission to empower learners with
          essential real-world skills.
        </p>
      </div>

      <div>
        <h3 className="text-base sm:text-lg font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="about.html" className="block text-sm text-gray-500 hover:text-blue-600">About Us</a></li>
          <li><a href="Features.html" className="block text-sm text-gray-500 hover:text-blue-600">Features</a></li>
          <li><a href="worshop.html" className="block text-sm text-gray-500 hover:text-blue-600">Workshops</a></li>
          <li><a href="blog.html" className="block text-sm text-gray-500 hover:text-blue-600">Blog</a></li>
          <li><a href="contact.html" className="block text-sm text-gray-500 hover:text-blue-600">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-base sm:text-lg font-bold mb-4">Contact Us</h3>
        <address className="not-italic text-sm leading-6 text-gray-500">
          Kolkata, India<br />
          <a href="mailto:contact@learnhyve.com" className="text-blue-600 inline-block mt-2 hover:underline">contact@learnhyve.com</a><br />
          <a href="mailto:Support@learnhyve.com" className="text-blue-600 inline-block mt-2 hover:underline">Support@learnhyve.com</a>
        </address>
      </div>

      <div>
        <h3 className="text-base sm:text-lg font-bold mb-4">Follow Us</h3>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
          <a href="https://www.facebook.com/profile.php?id=61561398463423" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-blue-600">Facebook</a>
          <a href="https://www.instagram.com/learnhyve_app/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-blue-600">Instagram</a>
          <a href="https://x.com/learnhyve_app" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-blue-600">Twitter</a>
        </div>
      </div>
    </div>

    <div className="text-center pt-4 border-t border-gray-200 text-sm text-gray-500">
      <p>© <span>{new Date().getFullYear()}</span> LearnHyve. All rights reserved.</p>
    </div>
  </div>
</footer>

          </div>
    </div>
  );
};

export default Workshop;