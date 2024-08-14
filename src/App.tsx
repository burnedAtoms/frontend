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
    const heroImg:HTMLElement = heroRef.current!;
    const headerLogo:HTMLElement = headerRef.current!;
    const headerPosition:DOMRect = headerLogo.getBoundingClientRect();
    const heroImgPosition:DOMRect = heroImg.getBoundingClientRect();

    const mm = gsap.matchMedia();
    
    const deltaX = headerPosition.left - heroImgPosition.left;

    if (heroImg && headerLogo) {
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroImg,
            start: "top top-=96px",
            scrub: true,
          },
        });
        tl.to(heroImg, {
          x: deltaX * 1.4,
          y: "15.5vw",
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
    <div id="main-wrapper" className="w-screen px-6">
      <Header ref={headerRef} />
      <main id="main-content" className="relative w-full flex flex-col items-center gap-8">
        <section ref={heroContainer}>
          <Hero ref={heroRef} />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <WorkExperience />
        </section>
        <section>
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