import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function Testimonials() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100 || 0);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="bg-[#F7F5F9] mx-5 sm:mx-10 p-5 sm:px-20 sm:py-16 mt-10 rounded-2xl flex flex-col items-center sm:items-start ">
      {/* Header */}
      <div className="flex items-center space-x-2 justify-center sm:justify-start mb-6">
        <div className="bg-[#8064A2] text-white p-3 rounded-full">
          <span className="text-5xl">❝</span>
        </div>
        <h2 className="text-xl font-bold">Testimonials</h2>
      </div>

      {/* Grid layout: text left, author + audio right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10    sm:items-start sm:flex sm:flex-col ">
        {/* Left Side: Testimonial Text */}
        <div>
          <p className="text-gray-700 text-sm leading-relaxed sm:text-lg">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
        </div>
        {/* Right Side: Author + Audio */}
        <div className="flex flex-col space-y-6  sm:flex-row-reverse sm:justify-between w-full ">
          {/* Author */}
          <div className="flex items-center space-x-3 pl-5">
            <img
              src="src/assets/image.png"
              alt="Shubha Nagarajan"
              className=" w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-purple-700">Shubha Nagarajan</h3>
              <p className="text-sm text-sky-500">Classical Dancer</p>
            </div>
          </div>

          {/* Custom Audio Player */}
          <div className="bg-purple-300 rounded-3xl flex items-center px-6 py-6 space-x-4 sm:w-3/4">
            {/* Play Button */}
            <button
              onClick={togglePlay}
              className="w-16 h-16 flex items-center justify-center bg-[#FFFFFF] rounded-full text-[#8064A2] shadow"
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>

            {/* Progress bar */}
            <div className="flex-1 flex items-center space-x-3 ">
              <div className="flex-1 h-1 bg-white rounded-full relative">
                <div
                  className="absolute top-0 left-0 h-1 bg-[#CCC1DA] rounded-full"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="absolute top-1/2 transform -translate-y-1/2"
                  style={{ left: `${progress}%` }}
                >
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                </div>
              </div>
              <span className="text-purple-400 font-medium text-sm w-12">
                {formatTime(currentTime)}
              </span>
            </div>

            {/* Avatar */}
            <img
              src="src/assets/image.png"
              alt="Shubha Nagarajan"
              className="w-8 h-8 sm:w-16 sm:h-16 rounded-full object-cover"
            />

            {/* Hidden audio element */}
            <audio
              ref={audioRef}
              src="/testimonial-audio.mp3"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
