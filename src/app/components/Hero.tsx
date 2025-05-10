"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(1);
  const [previewVideoIndex, setPreviewVideoIndex] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  // const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  const getVideoSource = (index: number) => `/videos/hero-${index}.mp4`;
  const upcomingVideoIndex = (previewVideoIndex % totalVideos) + 1;

  const handleMiniVideoClicked = () => {
    setIsClicked(true);
    setPreviewVideoIndex(upcomingVideoIndex);
  };

  // const handleVideoLoadedData = () => {
  //   setLoadedVideos((prev) => prev + 1);
  // };

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  useGSAP(
    () => {
      if (isClicked) {
        gsap.set("#preview-video-animation", { visibility: "visible" });
        gsap.to("#preview-video-animation", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            if (nextVideoRef.current) nextVideoRef.current.play();
          },
          onComplete: () => setActiveVideoIndex(previewVideoIndex),
        });

        gsap.from("#preview-video-box", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [previewVideoIndex], revertOnUpdate: true },
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(5% 10%, 75% 15%, 95% 95%, 20% 90%)",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="bg-blue-75 relative z-50 h-dvh w-screen overflow-hidden"
      >
        <div>
          <div className="absolute-center z-50 scale-50 cursor-pointer overflow-hidden rounded-2xl opacity-0 transition-all duration-300 ease-in hover:scale-100 hover:opacity-100">
            <div onClick={handleMiniVideoClicked}>
              <video
                ref={nextVideoRef}
                src={getVideoSource(upcomingVideoIndex)}
                loop
                muted
                id="preview-video-box"
                className="size-64 origin-center scale-150 object-cover"
                // onLoadedData={handleVideoLoadedData}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSource(previewVideoIndex)}
            loop
            muted
            id="preview-video-animation"
            className="absolute-center invisible z-40 size-64 object-cover"
            // onLoadedData={handleVideoLoadedData}
          />
          <video
            src={getVideoSource(
              activeVideoIndex > totalVideos ? 1 : activeVideoIndex,
            )}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 size-full object-cover"
            // onLoadedData={handleVideoLoadedData}
          />
        </div>
        <h1 className="special-font hero-heading text-blue-75 absolute right-5 bottom-5 z-40">
          G<span>a</span>ming
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="sm: mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Redefi<span>n</span>e
            </h1>
            <p className="font-robert-regular mb-4 text-blue-100">
              Enter the Metagame <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              className="flex gap-2 bg-yellow-300 px-7 py-3"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute right-5 bottom-5 text-black">
        G<span>a</span>ming
      </h1>
    </div>
  );
};

export default Hero;
