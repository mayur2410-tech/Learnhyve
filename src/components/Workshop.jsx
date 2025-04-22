


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/logoblack.png';
import { Link } from 'react-router-dom';
import LottieAnimation from './LottieAnimation';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import SkillCard from './SkillCard';

const lifeChangingSkills = [
  {
    title: "Personal Branding",
    description: "Build a compelling personal brand that stands out in the competitive job market",
    icon: "🌟",
    color: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-500"
  },
  {
    title: "Emotional Intelligence",
    description: "Develop self-awareness and interpersonal skills for personal and professional growth",
    icon: "❤️",
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500"
  },
  {
    title: "Time Management",
    description: "Master productivity techniques to maximize your potential and reduce stress",
    icon: "⏰",
    color: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-500"
  },
  {
    title: "Leadership Development",
    description: "Cultivate leadership skills to inspire and guide teams effectively",
    icon: "🏆",
    color: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500"
  }
];

const workshops = [
  {
    title: "Communication Skill",
    description: "Master effective communication techniques for professional success",
    icon: "💬",
    color: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-500"
  },
  {
    title: "Money Management",
    description: "Learn essential financial planning and management skills",
    icon: "💰",
    color: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500"
  },
  {
    title: "Stock Market & Investment",
    description: "Understand market dynamics and investment strategies",
    icon: "📈",
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500"
  },
  {
    title: "Problem Solving & Critical Thinking",
    description: "Develop analytical and strategic thinking abilities",
    icon: "💡",
    color: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500"
  }
];

const trendingSkills = [
  {
    title: "English Speaking",
    description: "Master conversational English and business communication for global opportunities",
    icon: "🗣️",
    color: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-500"
  },
  {
    title: "AI Tools",
    description: "Learn to leverage AI tools and platforms for enhanced productivity and innovation",
    icon: "🤖",
    color: "bg-cyan-100 dark:bg-cyan-900",
    iconColor: "text-cyan-500"
  },
  {
    title: "Robotics and AI",
    description: "Explore robotics fundamentals and artificial intelligence applications",
    icon: "🦾",
    color: "bg-violet-100 dark:bg-violet-900",
    iconColor: "text-violet-500"
  },
  {
    title: "Yoga & Self Defense",
    description: "Combine mindful movement with practical self-defense techniques",
    icon: "🧘",
    color: "bg-rose-100 dark:bg-rose-900",
    iconColor: "text-rose-500"
  }
];

const Workshop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const headerRef = useRef(null);
  const blobsRef = useRef(null);

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
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: workshopsProgress } = useScroll({
    target: workshopsRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: trendingProgress } = useScroll({
    target: trendingRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress
  const lifeChangingScrollProgress = useTransform(lifeChangingProgress, [0, 0.4], [0, 1]);
  const workshopsScrollProgress = useTransform(workshopsProgress, [0, 0.4], [0, 1]);
  const trendingScrollProgress = useTransform(trendingProgress, [0, 0.4], [0, 1]);

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
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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
          background: linear-gradient(to bottom,
              var(--bg-gradient-light-from),
              var(--bg-gradient-light-to),
              var(--bg-gradient-light-from));
          overflow-x: hidden;
        }

        @media (prefers-color-scheme: dark) {
          body {
            background: linear-gradient(to bottom,
                var(--bg-gradient-dark-from),
                var(--bg-gradient-dark-to),
                var(--bg-gradient-dark-from));
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

        footer {
          background-color: #f3f4f6;
          color: #4a5568;
        }

        .foot-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .footer-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          margin-bottom: 2rem;
        }

        .footer-heading {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .foot-description {
          font-size: 0.875rem;
          line-height: 1.5;
          color: #6b7280;
        }

        .foot-brand {
          display: inline-block;
          text-decoration: none;
          color: inherit;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .foot-logo {
          width: auto;
          height: 4rem;
        }

        .brand-highlight {
          color: #2d89ef;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-link {
          display: block;
          text-decoration: none;
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #2d89ef;
        }

        .footer-address {
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .footer-contact {
          color: #2d89ef;
          text-decoration: none;
          display: inline-block;
          margin-top: 0.5rem;
        }

        .footer-contact:hover {
          text-decoration: underline;
        }

        .foot-social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          text-decoration: none;
          color: #6b7280;
          font-size: 0.875rem;
          transition: color 0.3s;
        }

        .social-icon:hover {
          color: #2d89ef;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .nav-links.active {
            display: flex;
          }

          .menu-toggle {
            display: block;
          }

          footer.bg-secondary {
            width: 100%;
          }
        }
      `}</style>

      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </Link>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''} hidden md:flex space-x-12 mt-3`}>
              <Link to="/home" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Home</Link>
              <Link to="/features" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Features</Link>
              <Link to="/workshop" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Workshops</Link>
              <Link to="/blog" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Blogs</Link>
              <Link to="/about" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">About</Link>
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
            <div
              className="menu-toggle md:hidden text-2xl cursor-pointer text-gray-700 dark:text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </div>
          </div>
        </div>
      </nav>

      <div className="background-blobs" ref={blobsRef}>
        <div className="background-blob blob-left"></div>
        <div className="background-blob blob-right"></div>
      </div>

      <div className="container relative mx-auto px-16 py-16 md:py-24">
        <motion.section
          id="header-section"
          className="flex flex-col md:flex-row items-center gap-8 mb-20"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex-1 space-y-6 z-10">
            <h1 className="text-6xl md:text-8xl font-bold text-orange-500 leading-tight">
              Learn the highly <br /><span className="text-primary">essential skills</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Discover the essential and soft skills often overlooked by schools and colleges. These skills are
              crucial not just for securing a great job, but for leading a successful and fulfilling life.
            </p>
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Explore Workshops
            </button>
          </div>
          <div className="flex-1 relative z-10">
            <LottieAnimation />
          </div>
        </motion.section>
      </div>

      {/* Life-Changing Skills Section */}
      <section ref={lifeChangingRef} className="relative min-h-screen -mt-10 bg-gradient-to-b from-transparent via-black/80 to-black snap-start">
        <div className="text-center mb-12 pt-8">
          <h2 className="text-3xl font-bold text-white mb-4 inline-block relative">
            The Life-Changing Skills
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-300 dark:bg-orange-700 transform skew-x-12"></div>
          </h2>
        </div>
        <motion.div
          className="sticky top-0 h-screen flex items-center justify-center"
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
        <div className="h-[30vh]" />
      </section>

      {/* Workshops Section */}
      <section ref={workshopsRef} className="relative min-h-screen  bg-[#000]  snap-start">
        <div className="text-center mb-12 pt-8">
          <h2 className="text-3xl font-bold text-white mb-4 inline-block relative">
            The Universal Skills
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-300 dark:bg-orange-700 transform skew-x-12"></div>
          </h2>
        </div>
        <motion.div
          className="sticky top-0 h-screen flex items-center justify-center"
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
        <div className="h-[30vh]" />
      </section>

      {/* Trending Skills Section */}
      <section ref={trendingRef} className="relative min-h-screen  bg-[#000]  snap-start">
        <div className="text-center mb-12 pt-8">
          <h2 className="text-3xl font-bold text-white mb-4 inline-block relative">
            Trending Skills
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-300 dark:bg-orange-700 transform skew-x-12"></div>
          </h2>
        </div>
        <motion.div
          className="sticky top-0 h-screen flex items-center justify-center"
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
        <div className="h-[30vh]" />
      </section>

      <footer className="footer bg-secondary">
        <div className="foot-container">
          <div className="footer-grid">
            <div>
              <a href="worshop.html" className="foot-brand">
                <img className="foot-logo" src={logo} alt="learnhyve-logo" />
              </a>
              <p className="foot-description">
                Revolutionizing education for a skilled India. Join us in our mission to empower learners with
                essential real-world skills.
              </p>
            </div>
            <div>
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="about.html" className="footer-link">About Us</a></li>
                <li><a href="Features.html" className="footer-link">Features</a></li>
                <li><a href="worshop.html" className="footer-link">Workshops</a></li>
                <li><a href="blog.html" className="footer-link">Blog</a></li>
                <li><a href="contact.html" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-heading">Contact Us</h3>
              <address className="footer-address">
                Kolkata, India<br />
                <a href="mailto:contact@learnhyve.com" className="footer-contact">contact@learnhyve.com</a><br />
                <a href="mailto:Support@learnhyve.com" className="footer-contact">Support@learnhyve.com</a>
              </address>
            </div>
            <div>
              <h3 className="footer-heading">Follow Us</h3>
              <div className="foot-social-links">
                <a href="https://www.facebook.com/profile.php?id=61561398463423" className="social-icon" target="_blank">Facebook</a>
                <a href="https://www.instagram.com/learnhyve_app/" className="social-icon" target="_blank">Instagram</a>
                <a href="https://x.com/learnhyve_app" className="social-icon" target="_blank">Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© <span>{currentYear}</span> LearnHyve. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Workshop;