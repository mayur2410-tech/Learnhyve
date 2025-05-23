"use client"
import { Star } from "lucide-react"

export default function CommunicationSkill() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c] text-white">
      {/* Header Section */}
      <div className="p-6 flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-7xl font-medium ">Communication skill</h1>
          <p className="text-4xl ml-2 text-gray-300 max-w-[700px]">
            Master effective communication techniques for professional success.
          </p>
          <div className="flex ml-2 items-center gap-1">
            <span className="text-4xl font-medium">4.7</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400 ml-4" />
            ))}
          </div>
          <div className="flex gap-3 ml-2  ">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium">Learn Now</button>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium">Enquire now</button>
          </div>
        </div>
        <div className="bg-[#f9ebd7] w-16 h-16 rounded-2xl flex items-center justify-center">
          <div className="w-8 h-8 bg-purple-300 rounded-full opacity-80"></div>
        </div>
      </div>

      {/* Middle Section with Person */}
      <div className="relative mt-4">
        <div className="bg-gradient-to-b from-[#5d4a28] to-transparent h-64 rounded-t-full mx-auto w-full max-w-md flex flex-col items-center justify-center">
          <div className="absolute top-10">
            <img src="/placeholder.svg?height=150&width=100" alt="Person speaking" className="h-[150px] w-auto" />
          </div>
          <div className="mt-32 text-center space-y-1">
            <h2 className="text-2xl font-bold">Speak Confidently</h2>
            <p className="text-xl font-medium">in front of anyone</p>
          </div>
        </div>
      </div>

      {/* What You Will Learn Section */}
      <div className="px-6 mt-8">
        <h3 className="text-xl font-bold text-yellow-500 mb-4">WHAT YOU WILL LEARN:</h3>

        <div className="space-y-4">
          <div className="bg-white text-black rounded-3xl p-4">
            <h4 className="text-xl font-bold mb-1">Verbal Communication</h4>
            <p className="text-sm text-gray-700">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>

          <div className="bg-white text-black rounded-3xl p-4">
            <h4 className="text-xl font-bold mb-1">Non Verbal Communication</h4>
            <p className="text-sm text-gray-700">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>

          <div className="bg-white text-black rounded-3xl p-4">
            <h4 className="text-xl font-bold mb-1">Business Communication</h4>
            <p className="text-sm text-gray-700">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-gray-500"}`} />
          ))}
        </div>
      </div>

      {/* Learning Stages Section */}
      <div className="px-6 mt-12">
        <h3 className="text-xl font-bold text-yellow-500 mb-6">LEARNING STAGES</h3>

        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
              <span className="text-xs">Newbie</span>
            </div>
          </div>

          <div className="h-[2px] flex-grow bg-white mx-1"></div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
              <span className="text-xs">Advance</span>
            </div>
          </div>

          <div className="h-[2px] flex-grow bg-white mx-1"></div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
              <span className="text-xs">Pro</span>
            </div>
          </div>

          <div className="h-[2px] flex-grow bg-white mx-1"></div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-transparent">
              <span className="text-xs">Expert</span>
            </div>
          </div>
        </div>
      </div>

      {/* What Users Say Section */}
      <div className="px-6 mt-12 mb-8">
        <h3 className="text-xl font-bold">
          <span className="text-yellow-500">WHAT OUR USERS SAY</span> ABOUT US!
        </h3>

        {/* This section appears empty in the image */}
        <div className="h-32"></div>
      </div>
    </div>
  )
}


