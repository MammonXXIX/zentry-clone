"use client";

import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

const BentoTilt = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [transformStyle, setTransformStyle] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * 5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;

    setTransformStyle(newTransform);
  };

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransformStyle("")}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

type BentoCardProps = {
  src: string;
  title: React.ReactNode;
  description: string;
  isComingSoon: boolean;
};

const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
}: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 size-full object-cover object-center"
      />
      <div className="relative z-50 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-heading special-font">{title}</h1>
          {description && (
            <p className="font-robert-regular mt-2 max-w-64 text-sm">
              {description}
            </p>
          )}
        </div>

        {isComingSoon && (
          <Button
            id="coming-soon"
            title="Coming Soon"
            leftIcon={<TiLocationArrow />}
            className="flex gap-2 border-2 border-blue-50/20 bg-black px-5 py-2"
          />
        )}
      </div>
    </div>
  );
};

export { BentoTilt, BentoCard };
