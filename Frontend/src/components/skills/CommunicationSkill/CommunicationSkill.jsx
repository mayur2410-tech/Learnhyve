import React from 'react';
import { Star } from 'lucide-react';

const CommunicationSkill = () => {
  const pageStyle = {
    height: '100%',
    width: '100%',
    background: 'linear-gradient(to bottom, #2F2F2F 0%, #000000 100%)',
    
    color: '#fff' // Optional: for any text you add
  };

  return (
    <div style={pageStyle}>
    <div className="pt-6 pb-4">
      <div className='ml-10'>
      <h1 className="text-7xl font-normal mb-1" style={{ fontFamily: 'Poly, serif' }}>
  Communication skill
</h1>
<p
  className="text-3xl text-gray-300 mt-8 max-w-[800px]"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  Master effective communication techniques for professional success.
</p>

      <div className="flex items-center mb-4">
        <span className="mr-2 text-3xl mt-4">4.7</span>
        <div className="flex mt-4 ">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star} 
              size={30} 
              fill="#FAD000" 
              color="#FAD000" 
              className="mr-5"
            />
          ))}
        </div>
      </div>
      </div>

      <div className="flex space-x-3 ml-10">
        <button>
          <div className="bg-[#FAD000] text-black px-4 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg font-semibold">
            Learn Now
          </div>
        </button>
        <button>
          <div className="bg-[#FAD000] text-black px-4 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg font-semibold">
            Enquire Now
          </div>
        </button>
       
      </div>

      <div className="absolute top-6 right-8 w-16 h-16 bg-[#FFF6E0] rounded-2xl flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-[#D8BFD8] opacity-70"></div>
      </div>
    </div>
    <div className="relative w-full overflow-hidden pb-40">
  {/* Larger Half Circle (Dark) */}
 {/* Dark Half Circle (Arc facing up) */}
<div 
  className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-t-[400px] z-0"
  style={{
    background: 'linear-gradient(to bottom, rgba(243, 175, 28, 0.07) 0%, rgba(115, 115, 115, 0) 100%)',
    boxShadow: 'inset 0 3px 0 rgba(153, 153, 153, 0.4)'
  }}
></div>
<div 
  className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-t-[300px] z-10"
  style={{
    background: 'linear-gradient(183deg, #825B06, #150f0f)'
  }}
></div>

  {/* Content above the circles */}
  <div className="relative z-10 flex flex-col items-center justify-center pt-[280px] text-white text-center">
    <img src="/your-illustration.png" alt="interview" className="w-[250px] mb-6" />
    <h2 className="text-2xl font-semibold font-[Poppins]">
      Clear any interview <br /> based on communication
    </h2>
  </div>
</div>

    </div>
  );
};

export default CommunicationSkill;
