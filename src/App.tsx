import { useRef } from 'react';
import './App.css';
import Sections from './components/index';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const { Header, Hero, Note, Skills, WorkExperience, Projects } = Sections;

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const heroContainer = useRef(null);


  useGSAP(() => {
    const heroImg = heroRef.current;
    const headerLogo = headerRef.current;
    const mm = gsap.matchMedia();

    if (heroImg && headerLogo) {
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroImg,
            start: "clamp(top 80px)",
            scrub: true,
          },
        });
        tl.to(heroImg, {
          x: "-220%",
          y: "9.5vw",
          scale: 0.05,
          autoAlpha: 0,
          duration: 2,
        }).fromTo(headerLogo, {
          scale: 0,
        }, {
          scale: 1
        });
      });
    }
  }, { scope: heroContainer, dependencies: [window.innerWidth] });

  return (
    <div className="w-screen px-6">
      <Header ref={headerRef} />
      <main className="w-full flex flex-col items-center gap-8">
        <section ref={heroContainer}>
          <Hero ref={heroRef} />
        </section>
        <section>
          <Skills />
        </section>
        <section className="w-full">
          <WorkExperience />
        </section>
        <section className="h-[100vh]">
          <Projects />
        </section>
        <section>
          <Note />
        </section>
      </main>
    </div>
  );
}

export default App;
