import { TiLocationArrow } from "react-icons/ti";
import { BentoCard, BentoTilt } from "./Bento";

const Features = () => {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-black">
      <div className="container mx-auto overflow-x-hidden px-4">
        <div className="py-32 text-sm text-blue-50">
          <h1 className="font-robert-medium">Explore the Zentry Universe</h1>
          <p className="font-robert-regular max-w-64 opacity-50">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm
          </p>
        </div>

        <BentoTilt className="relative mb-4 h-96 w-full overflow-hidden rounded-lg border border-blue-50/20 transition-all ease-in">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<span>n</span>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-4">
          <BentoTilt className="col-span-2 row-span-1 overflow-hidden rounded-lg border border-blue-50/20 transition-all ease-in md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<span>m</span>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="col-span-2 ml-32 overflow-hidden rounded-lg border border-blue-50/20 transition-all ease-in md:col-span-1 md:ml-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<span>e</span>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="col-span-2 mr-32 overflow-hidden rounded-lg border border-blue-50/20 transition-all ease-in md:col-span-1 md:mr-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<span>u</span>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />
          </BentoTilt>
          <BentoTilt className="overflow-hidden rounded-lg border border-blue-50/20 transition-all ease-in">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-4">
              <h1 className="bento-heading special-font">
                M<span>o</span>re co<span>m</span>ing s<span>o</span>on.
              </h1>
              <TiLocationArrow className="m-4 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="overflow-hidden rounded-lg border border-blue-50/20 transition-all ease-in">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </div>
  );
};

export default Features;
