import About from "./components/About";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
};

export default Home;
