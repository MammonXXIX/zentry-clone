"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to("#about-image", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative flex flex-col items-center pt-2 text-center">
        <h1 className="font-general text-sm uppercase md:text-[10px]">
          welcome to zentry
        </h1>
        <AnimatedTitle
          title="disc<span>o</span>ver the world's <br /> largest shared <span>a</span>dventure"
          className="mt-5"
        />
      </div>
      <div className="relative h-dvh w-screen" id="clip">
        <div
          className="about-clip-path absolute left-1/2 z-50 h-[90vh] w-[38rem] -translate-x-1/2"
          id="about-image"
        >
          <img
            src="images/about.webp"
            alt="Background"
            className="size-full object-cover"
          />
        </div>
        <div className="absolute bottom-10 w-screen text-center text-sm">
          <p className="font-robert-medium">
            The Metagame begins-your life, now an epic MMORPG
          </p>
          <p className="font-robert-regular">
            Zentry is the unified play layer driving attention and contribution{" "}
            <br />
            through cross-world AI gamification
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
