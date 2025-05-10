"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NAV_ITEMS = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const [isAudioPlay, setIsAudioPlay] = useState(false);
  const [isAudioToggleActive, setIsAudioToggleActive] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const navRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { y } = useWindowScroll();

  const audioToggle = () => {
    setIsAudioPlay((prev) => !prev);
    setIsAudioToggleActive((prev) => !prev);
  };

  useEffect(() => {
    if (audioRef.current) {
      isAudioPlay ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isAudioPlay]);

  useEffect(() => {
    if (y === 0) {
      setIsVisible(true);
      if (navRef.current) navRef.current.classList.remove("floating-nav");
    } else if (y > lastY) {
      setIsVisible(false);
      if (navRef.current) navRef.current.classList.add("floating-nav");
    } else if (y < lastY) {
      setIsVisible(true);
      if (navRef.current) navRef.current.classList.add("floating-nav");
    }

    setLastY(y);
  }, [y, lastY]);

  useGSAP(() => {
    gsap.to(navRef.current, {
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isVisible]);

  return (
    <div
      ref={navRef}
      className="fixed inset-x-0 top-4 z-60 h-16 transition-all duration-700 sm:inset-x-6"
    >
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <div className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="logo" className="w-10" />
            <Button
              id="products"
              title="products"
              rightIcon={<TiLocationArrow />}
              className="flex items-center gap-2 bg-blue-50 px-4 py-2 text-sm"
            />
            <Button
              id="white-paper"
              title="white paper"
              className="flex gap-2 bg-blue-50 px-4 py-2 text-sm"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="font-general mr-5 cursor-pointer text-xs text-blue-50 uppercase hover:underline"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={audioToggle}
              className="flex items-center space-x-0.5"
            >
              <audio
                ref={audioRef}
                src="/audio/loop.mp3"
                loop
                className="hidden"
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`audio-bar ${isAudioToggleActive ? "active" : ""}`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
