import React, { useEffect } from 'react';

const LottieAnimation = () => {
  useEffect(() => {
    // Dynamically load the dotLottie player script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full md:w-3/4 mx-auto aspect-square">
      <style jsx>{`
        .lottie-container {
          width: 100%;
          height: 100%;
          max-width: 600px;
          max-height: 600px;
        }

        @media (max-width: 768px) {
          .lottie-container {
            max-width: 400px;
            max-height: 400px;
          }
        }

        @media (max-width: 480px) {
          .lottie-container {
            max-width: 300px;
            max-height: 300px;
          }
        }

        .plus-icon {
          position: absolute;
          right: -0.5rem;
          bottom: -0.5rem;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 20;
        }

        @media (max-width: 768px) {
          .plus-icon {
            width: 3rem;
            height: 3rem;
            right: -0.25rem;
            bottom: -0.25rem;
          }
        }

        @media (max-width: 480px) {
          .plus-icon {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
      `}</style>
      <div className="lottie-container">
        <dotlottie-player
          src="https://lottie.host/357eda69-f645-41fd-83c4-1183d63fb9f6/sBQauoyLqz.lottie"
          background="transparent"
          speed="1"
          style={{ width: '100%', height: '100%' }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <div className="plus-icon">
        <span className="transform -rotate-12 text-white text-2xl md:text-3xl lg:text-4xl font-bold">+</span>
      </div>
    </div>
  );
};

export default LottieAnimation;
