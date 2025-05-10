"use client";

import { useEffect, useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import Button from "./Button";

const Story = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, top, right, bottom, width, height } =
        containerRef.current.getBoundingClientRect();

      const isWithinSection =
        e.clientX >= left &&
        e.clientX <= right &&
        e.clientY >= top &&
        e.clientY <= bottom;

      if (!isWithinSection) return;

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const x = (e.clientX - centerX) / width;
      const y = (e.clientY - centerY) / height;

      gsap.to("#story-image", {
        x: x * 30,
        y: y * 30,
        duration: 1,
        ease: "power1.out",
      });

      gsap.to(".story-clip-path", {
        transformPerspective: 1000,
        rotateX: -y * 10,
        rotationY: x * 10,
        duration: 1,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-dvh w-screen overflow-hidden bg-black text-blue-50"
    >
      <div className="flex flex-col items-center py-10">
        <p className="font-general mb-5 text-sm uppercase">
          the open ip multiverse
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="the st<span>o</span>ry of <br /> a hidden real<span>m</span>"
            className="pointer-events-none relative left-1/2 z-50 -translate-x-1/2 mix-blend-difference"
          />

          <div className="story-image-container relative h-dvh w-full">
            <div className="absolute top-0 left-0 size-full">
              <div className="story-clip-path absolute top-[-3rem] left-[3rem] w-[80%] overflow-hidden sm:top-[-5rem] sm:left-[5rem] md:top-[-8rem] md:left-[8rem] lg:top-[-10rem] lg:left-[10rem] xl:top-[-13rem] xl:left-[13rem]">
                <img
                  id="story-image"
                  src="/images/entrance.webp"
                  alt="entrance.webp"
                  className="size-full scale-150 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl mx-10 -mt-160 max-w-lg self-end sm:-mt-140 lg:-mt-130 xl:-mt-100">
          <p className="font-general text-sm">
            The Open IP Universe The story of a hidden realm Where realms
            converge, lies Zentry and the boundless pillar. Discover its secrets
            and shape your fate amidst infinite opportunities.
          </p>
          <Button
            id="story-button"
            title="discover prologue"
            className="mt-2 px-4 py-2 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
