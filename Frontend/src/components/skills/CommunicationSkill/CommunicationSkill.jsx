import React from 'react';
import ballon from '../../../assets/balloon.png'; ;
import boy from '../../../assets/boy.png';
import { Star,ArrowRight } from 'lucide-react';
// import './Mayur.css'; // Assuming you have a CSS file for styles
const CommunicationSkill = () => {
    return (

        <div className="min-h-screen bg-gradient-to-b from-[#2e2e2e] to-[#000000] overflow-x-hidden font-sans relative w-full overflow-hidden">
            <div className="min-h-screen w-full bg-gradient-to-b from-[#2F2F2F] to-black text-white font-inter">
                <div className=" flex justify-between items-start">

                    <div className="max-w-5xl  pt-16 pb-8 px-6">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins">
                            Communication Skill
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl font-inter">
                            Master effective communication techniques for professional success.
                        </p>
                        <div className="flex items-center mb-6">
                            <span className="mr-2 text-2xl md:text-3xl font-semibold">4.7</span>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={28}
                                        fill="#FAD000"
                                        color="#FAD000"
                                        className="mr-1"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex space-x-4 mb-10">
                            <button className="bg-[#FAD000] text-black px-6 py-2 rounded-lg font-semibold text-base md:text-lg shadow hover:bg-yellow-400 transition">
                                Learn Now
                            </button>
                            <button className="bg-transparent border border-[#FAD000] text-[#FAD000] px-6 py-2 rounded-lg font-semibold text-base md:text-lg hover:bg-[#FAD000] hover:text-black transition">
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Right Content (Icon) */}

                    <div className="absolute top-16 right-4  sm:right-6 lg:right-8 z-10 flex items-center justify-center">
                        <img
                            src={ballon}
                            alt="Balloon icon"
                            className="w-16 h-16 sm:w-20 sm:h-20  lg:w-24 lg:h-24 rounded-2xl object-cover"
                        />
                    </div>



                </div>
                {/* Content */}
                <div className="relative z-20 flex flex-col items-center">
                    <img
                        src={boy}
                        alt="interview"
                        className="w-40 sm:w-48 md:w-64 lg:w-80 h-auto mb-4 md:mb-6 object-contain" />
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-poppins text-center leading-tight">
                        Speak Confidently <br />
                        in front of anyone
                    </h2>
                </div>

                {/* Decorative Circles */}
                <div className="relative w-full flex flex-col items-center  sm:mt-32 md:mt-40 lg:mt-64">
                    {/* Outer Circle */}
                    <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1440px] h-[200px] sm:h-[300px] md:h-[500px] lg:h-[660px] rounded-t-[700px] z-0"
                        style={{
                            background:
                                'linear-gradient(to bottom, rgba(243, 175, 28, 0.05) 0%, rgba(46, 46, 46, 0) 70%, rgba(0, 0, 0, 0) 100%)',
                            boxShadow: 'inset 0 2px 0 rgba(153, 153, 153, 0.2)',
                        }}
                    ></div>
                    {/* Inner Circle */}
                    <div
                        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-[70vw] max-w-[1200px] h-[150px] sm:h-[225px] md:h-[400px] lg:h-[500px] rounded-t-[40vw] z-10"
                        style={{
                            background:
                                'linear-gradient(183deg, rgba(130, 91, 6, 0.5) 0%, rgba(46, 46, 46, 0.1) 60%, rgba(0, 0, 0, 0) 100%)',
                        }}
                    ></div>
                </div>


                {/* Content Section */}
                {/* What you will Learn Section */}
                <div className=" px-4 sm:px-6 mt-10 sm:-mt-24 lg:px-8 ">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#f3af1c] to-[#543900] bg-clip-text text-transparent font-poppins tracking-wide mb-6">
                        WHAT YOU WILL LEARN:
                    </h2>
                    <div className="mt-6">
                        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 shadow-md">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black text-center font-poppins">
                                Verbal Communication
                            </h3>
                            <p className="text-sm sm:text-base lg:text-lg font-light text-black text-center mt-2 font-poppins">
                                Learn how to express your ideas clearly and confidently in any situation, from meetings to presentations.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 shadow-md">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black text-center font-poppins">
                                Non Verbal Communication
                            </h3>
                            <p className="text-sm sm:text-base lg:text-lg font-light text-black text-center mt-2 font-poppins">
                                Learn how to express your ideas clearly and confidently in any situation, from meetings to presentations.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 shadow-md">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black text-center font-poppins">
                                Business Communication
                            </h3>
                            <p className="text-sm sm:text-base lg:text-lg font-light text-black text-center mt-2 font-poppins">
                                Learn how to express your ideas clearly and confidently in any situation, from meetings to presentations.
                            </p>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <button className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#d9d9d9]" aria-label="Go to page 1"></button>
                            <button className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-white bg-transparent" aria-label="Go to page 2"></button>
                            <button className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-white bg-transparent" aria-label="Go to page 3"></button>
                        </div>
                    </div>
                </div>


                {/* Learning Stages Section */}
                <div className="mt-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#f3af1c] to-[#5a3d00] bg-clip-text text-transparent font-poppins tracking-wide mb-6">
                        LEARNING STAGES
                    </h2>
                    <div className="mt-6 overflow-x-auto">
  <div className="flex items-center justify-start sm:justify-between gap-4 min-w-max sm:min-w-full px-2 sm:px-0">
    {["Newbie", "Advance", "Pro", "Expert"].map((stage, index) => (
      <div key={index} className="flex items-center">
        {/* Circle */}
        <div className="flex flex-col items-center">
          <div
            className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full border-2 ${
              index <= 1 ? "border-white" : "border-gray-400"
            } flex items-center justify-center`}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center">
              <p className="text-sm sm:text-base lg:text-lg font-medium text-black font-poppins">
                {stage}
              </p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        {index < 3 && (
          <div className="mx-3 sm:mx-28">
            <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
          </div>
        )}
      </div>
    ))}
  </div>
</div>

                   
                </div>

                {/* Testimonial Section */}
              <div className="mt-16 px-4 sm:px-6 lg:px-8 pb-16">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#f3af1c] to-[#553a00] bg-clip-text text-transparent font-poppins tracking-wide mb-6">
    WHAT OUR USERS SAY ABOUT US!
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white font-poppins">
    {/* Testimonial Card */}
  <div className="bg-[#1a1300] border-white border  rounded-xl p-6 shadow-md transition-all duration-300 hover:border-[#fad000] ">
  <p className="mb-4 opacity-90">StimulER helped me get from IELTS band 5.5 to 8 in only a month...</p>
  <div className="flex items-center space-x-4">
    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full" alt="Regina" />
    <div>
      <p className="font-semibold">Regina</p>
      <p className="text-sm text-gray-400">@remo!</p>
    </div>
  </div>
</div>


  <div className="bg-[#1a1300] border-white border  rounded-xl p-6 shadow-md transition-all duration-300 hover:border-[#fad000] ">
      <p className="mb-4 opacity-90">StimulER helped me work on my pronunciation. It's almost 2 weeks and I have noticed a good improvement. Thanks team.</p>
      <div className="flex items-center space-x-4">
        <img src="https://randomuser.me/api/portraits/men/75.jpg" className="w-10 h-10 rounded-full" alt="Pawan" />
        <div>
          <p className="font-semibold">Pawan Dubey</p>
          <p className="text-sm text-gray-400">@Pawa090</p>
        </div>
      </div>
    </div>

  <div className="bg-[#1a1300] border-white border  rounded-xl p-6 shadow-md transition-all duration-300 hover:border-[#fad000] ">
      <p className="mb-4 opacity-90">Amazing app especially for those not in an English-speaking environment. "StimulER is the solution" exactly!</p>
      <div className="flex items-center space-x-4">
        <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-10 h-10 rounded-full" alt="Lara" />
        <div>
          <p className="font-semibold">Lara</p>
          <p className="text-sm text-gray-400">@lara17</p>
        </div>
      </div>
    </div>

  <div className="bg-[#1a1300] border-white border  rounded-xl p-6 shadow-md transition-all duration-300 hover:border-[#fad000] ">
      <p className="mb-4 opacity-90">As someone preparing for the IELTS, this is a great app for practicing English speaking. It helps me identify my bottlenecks and improve.</p>
      <div className="flex items-center space-x-4">
        <img src="https://randomuser.me/api/portraits/women/23.jpg" className="w-10 h-10 rounded-full" alt="Cindy" />
        <div>
          <p className="font-semibold">Cindy</p>
          <p className="text-sm text-gray-400">@Candy6688</p>
        </div>
      </div>
    </div>

  <div className="bg-[#1a1300] border-white border  rounded-xl p-6 shadow-md transition-all duration-300 hover:border-[#fad000] ">
      <p className="mb-4 opacity-90">I love this app. I’ve been working on my English skills and it helps a lot with improving speech and reading.</p>
      <div className="flex items-center space-x-4">
        <img src="https://randomuser.me/api/portraits/men/56.jpg" className="w-10 h-10 rounded-full" alt="JohnD" />
        <div>
          <p className="font-semibold">JohnD</p>
          <p className="text-sm text-gray-400">@JohnD456</p>
        </div>
      </div>
    </div>

  <div className="bg-[#1a1300] border-white border  rounded-xl p-6 shadow-md transition-all duration-300 hover:border-[#fad000] ">
      <p className="mb-4 opacity-90">This app is unfamiliar! I’ve never seen such a great and essential app. It helped me build my vocabulary and fix my grammar mistakes.</p>
      <div className="flex items-center space-x-4">
        <img src="https://randomuser.me/api/portraits/men/88.jpg" className="w-10 h-10 rounded-full" alt="Saudon" />
        <div>
          <p className="font-semibold">Saudon</p>
          <p className="text-sm text-gray-400">@donumanis</p>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>

    );
};

export default CommunicationSkill;
