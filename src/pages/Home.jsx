import {useState} from "react";
import {categories, videos} from "../constants.jsx";
import {CircleCheck, MoreVertical} from "lucide-react";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="ms-60 px-6 py-3">
      {/*CATEGORIES*/}
      <div className="w-full flex gap-2 fixed top-[73.6px] py-3 z-20 bg-white">
        {categories.map((category, index) => (
          <button
            className={`px-3 py-1 rounded-md font-semibold ${activeCategory === category ? "bg-black text-white" : "bg-black/5"}`}
            key={index}
            onClick={() => setActiveCategory(category)}
          >{category}</button>
        ))}
      </div>

      {/*  VIDEOS  */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 mt-8">
        {videos.map((video) => (
          <div className={`relative p-3 rounded-xl cursor-pointer transition-all duration-300 ease-in hover:bg-neutral-200`} key={video.id}>
            <img className={`mb-3 rounded-xl`} src={video.thumbnail} alt={video.title} height={225}/>
            <div className={`flex gap-2.5 items-start`}>
              <img className={`w-9 h-9 rounded-full`} src={video.channelAvatar} alt={video.channelName}/>
              <time className={`bg-black bg-opacity-50 absolute right-5 top-48 px-1 rounded-md text-white leading-normal`}>{video.duration}</time>
              <div>
                <h3 className={` leading-snug line-clamp-2 mb-1 text-base font-medium`}>{video.title}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span className={`text-neutral-600 text-base leading-snug`}>{video.channelName}</span>
                  <span>{video.verified && <CircleCheck className={`w-4 h-4 text-white fill-gray-500`}/>}</span>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
                  <span className={``}>{video.views}</span>
                  {video.uploadTime && (
                    <>
                      <span>|</span>
                      <span>{video.uploadTime}</span>
                    </>
                  )}
                </div>
              </div>
              <button>
                <MoreVertical className={`w-5 h-5`}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
