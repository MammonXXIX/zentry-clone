import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type AnimatedTitleProps = {
  title: string;
  className?: string;
};

const AnimatedTitle = ({ title, className }: AnimatedTitleProps) => {
  const titleRef = useRef(null);

  useGSAP(
    () => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    },
    { scope: titleRef },
  );

  return (
    <h1 ref={titleRef} className={`special-font hero-heading ${className}`}>
      {title.split("<br />").map((line, index) => (
        <div key={index} className="flex justify-center gap-3">
          {line.split(" ").map((word, lineIndex) => (
            <p
              key={lineIndex}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </h1>
  );
};

export default AnimatedTitle;
