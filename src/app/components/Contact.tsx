"use client";

import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageContainer = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <img src={src} alt={src} />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-96 w-screen p-15">
      <div className="relative rounded-xl bg-black">
        <div className="absolute top-0 hidden h-full w-72 overflow-hidden sm:block lg:w-96">
          <ImageContainer
            src="/images/contact-1.webp"
            className="contact-clip-path-1"
          />
          <ImageContainer
            src="/images/contact-2.webp"
            className="contact-clip-path-2 translate-y-50 lg:translate-y-60"
          />
        </div>

        <div className="absolute -top-30 right-0 w-72 md:top-0">
          <ImageContainer
            src="/images/swordman-partial.webp"
            className="absolute md:scale-125"
          />
          <ImageContainer
            src="/images/swordman.webp"
            className="contact-clip-path-3 md:scale-125"
          />
        </div>

        <div className="relative z-50 flex flex-col items-center gap-8 py-24 text-blue-50">
          <p className="font-general text-sm uppercase">join zentry</p>
          <AnimatedTitle title="let&#39;s b<span>u</span>ild the <br /> new era of g<span>a</span>ming <br /> t<span>o</span>gether." />
          <Button
            id="contact"
            title="contact us"
            className="px-8 py-2 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
