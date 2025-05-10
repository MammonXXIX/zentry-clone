"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const aboutContainerRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (timeline) => {
          if (timeline.progress >= 0.8) {
            setIsFullscreen(true);
          } else {
            setIsFullscreen(false);
          }
        },
      },
    });

    clipAnimation.fromTo(
      "#about-image-container",
      {
        clipPath: "polygon(10% 5%, 70% 10%, 85% 80%, 20% 95%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        width: "100vw",
        height: "100vh",
        ease: "power1.inOut",
      },
    );

    gsap.fromTo(
      "#about-image",
      {
        scale: 1.3,
      },
      {
        scale: 1,
      },
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!aboutContainerRef.current) return;
      if (isFullscreen) return;

      const rect = aboutContainerRef.current.getBoundingClientRect();

      const isWithinSection =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isWithinSection) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;

      const moveX = x * 30;
      const moveY = y * 30;

      gsap.to("#about-image", {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (isFullscreen) {
      gsap.to("#about-image", {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [isFullscreen]);

  return (
    <div ref={aboutContainerRef} id="about" className="min-h-screen w-screen">
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
          id="about-image-container"
          className="absolute left-1/2 z-50 h-[95%] w-[40%] -translate-x-1/2 overflow-hidden"
        >
          <img
            id="about-image"
            src="images/about.webp"
            alt="background"
            className="absolute size-full object-cover"
          />
        </div>
        <div className="absolute bottom-5 w-screen text-center text-sm">
          <h1 className="font-robert-medium">
            The Metagame begins-your life, now an epic MMORPG
          </h1>
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
