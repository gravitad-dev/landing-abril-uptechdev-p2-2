import { useRef, useState } from "react";
import { BsCaretRight, BsPause } from "react-icons/bs";
import data from "../../data.json";

const VideoSection = () => {
  const [isPaused, setIsPaused] = useState(true);

  const { url, title, alt } = data["section-four"].video;

  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className='bg-blue h-500px w-full relative rounded-md'>
      {/* video */}
      <div className='lg:translate-y-[-100px]'>
        <video
          className='object-cover aspect-video mx-auto '
          controls={false}
          paused={isPaused}
          ref={videoRef}
        >
          <source src={url} title={title} alt={alt} type='video/mp4' />
        </video>
        {/* button play */}
        <button
          onClick={togglePlay}
          className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
               bg-[#FFFFFF]/20 text-white rounded-full z-10 flex items-center justify-center
              text-[40px] md:text-[70px]
              '
        >
          {isPaused ? <BsCaretRight /> : <BsPause />}
        </button>
      </div>
    </div>
  );
};
export default VideoSection;
