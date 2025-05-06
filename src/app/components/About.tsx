"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.fromTo(
      "#about-image",
      {
        // translateZ: -100,
        // rotationX: 20,
        // rotationY: 20,
      },
      {
        // translateZ: 0,
        // rotationX: 0,
        // rotationY: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
        borderRadius: 0,
        ease: "power2.inOut",
      },
    );
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative flex flex-col items-center pt-2 text-center">
        <h1 className="font-general text-sm uppercase md:text-[10px]">
          welcome to zentry
        </h1>
        <AnimatedTitle
          title="disc<span>o</span>ver the world's <br /> largest shared <span>a</span>dventure"
          className="my-10"
        />
      </div>
      <div className="relative h-dvh w-screen" id="clip">
        <div
          className="absolute left-1/2 z-50 h-[85vh] w-[30vw] -translate-x-1/2 overflow-hidden rounded-2xl border-2"
          id="about-image"
        >
          <img
            src="images/about.webp"
            alt="background"
            className="absolute size-full object-cover"
          />
        </div>
        <div className="absolute bottom-5 w-screen text-center text-sm">
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
