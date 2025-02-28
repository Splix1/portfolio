import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <>
      {/* Single fixed background layer */}
      <div 
        className="fixed inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(-45deg, rgba(15, 23, 42, 1), rgba(49, 16, 84, 0.5), rgba(30, 27, 75, 0.3), rgba(15, 23, 42, 1))',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          zIndex: -1
        }}
      >
        <AnimatedBackground />
      </div>

      {/* Scrollable content */}
      <main className="relative">
        <Header />
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}