import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default Home;
