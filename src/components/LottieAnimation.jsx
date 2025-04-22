
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
    <div className="relative w-3/4 mx-auto aspect-square">
      <dotlottie-player
        src="https://lottie.host/357eda69-f645-41fd-83c4-1183d63fb9f6/sBQauoyLqz.lottie"
        background="transparent"
        speed="1"
        style={{ width: '600px', height: '600px' }}
        loop
        autoplay
      ></dotlottie-player>
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold z-20">
        <span className="transform -rotate-12">+</span>
      </div>
    </div>
  );
};

export default LottieAnimation;
