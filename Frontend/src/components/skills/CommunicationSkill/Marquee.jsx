import React from 'react';
import { useState } from 'react';

const testimonials = [
  {
    text: 'StimulER helped me get from IELTS band 5.5 to 8 in only a month...',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Regina',
    handle: '@remo!',
  },
  {
    text: "StimulER helped me work on my pronunciation. It's almost 2 weeks and I have noticed a good improvement. Thanks team.",
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'Pawan Dubey',
    handle: '@Pawa090',
  },
  {
    text: 'Amazing app especially for those not in an English-speaking environment. "StimulER is the solution" exactly!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Lara',
    handle: '@lara17',
  },
  {
    text: 'As someone preparing for the IELTS, this is a great app for practicing English speaking.',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
    name: 'Cindy',
    handle: '@Candy6688',
  },
  {
    text: 'I love this app. I’ve been working on my English skills and it helps a lot with improving speech and reading.',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
    name: 'JohnD',
    handle: '@JohnD456',
  },
  {
    text: 'This app is unfamiliar! I’ve never seen such a great and essential app.',
    image: 'https://randomuser.me/api/portraits/men/88.jpg',
    name: 'Saudon',
    handle: '@donumanis',
  },
];

const MarqueeRow = ({ reverse = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Normal and slow durations
  const normalDuration = 30; // seconds
  const slowDuration = 60; // seconds when hovered

  // Animation class with dynamic duration (via inline style)
  const animationName = reverse ? 'marquee-reverse' : 'marquee';
  const animationDuration = isHovered ? slowDuration : normalDuration;

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex space-x-6 px-4 min-w-max ${
  reverse ? 'animate-marquee-reverse' : 'animate-marquee'
}`}

      >
        {testimonials.concat(testimonials).map((t, i) => (
          <div
            key={i}
            className="bg-[#1a1300] border-white border rounded-xl p-6 shadow-md transition-all duration-300 hover:border-[#fad000] min-w-[300px] max-w-sm break-words cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className="mb-4 opacity-90">{t.text}</p>
            <div className="flex items-center space-x-4">
              <img src={t.image} className="w-10 h-10 rounded-full" alt={t.name} />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-400">{t.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



const Marquee = () => {
  return (
    <div className="space-y-6 py-10">
      <MarqueeRow />
      <MarqueeRow reverse />
    </div>
  );
};

export default Marquee;
