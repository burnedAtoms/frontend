import { useEffect, useRef, useState } from 'react';
import './App.css';
import Sections from './components/index';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Contact from './components/Contact';
import Drawer from './components/Drawer';

const { Hero, Skills, WorkExperience, Projects } = Sections;

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const heroContainer = useRef(null);
  const [drawerToggle, setDrawerToggle] = useState(false);
  const drawerContainerRef = useRef(null);

  useEffect(() => {
    const drawerContainerElement: HTMLElement = drawerContainerRef.current!;
    if (drawerContainerElement) {
      drawerContainerElement.style.transform = drawerToggle ? 'scale(1)' : 'scale(0)';
    }
  }, [drawerToggle]);

  const toggleDrawer = () => setDrawerToggle(!drawerToggle);


  useGSAP(() => {
    const heroImg: HTMLElement = heroRef.current!;
    const headerLogo: HTMLElement = headerRef.current!;
    const headerPosition: DOMRect = headerLogo.getBoundingClientRect();
    const heroImgPosition: DOMRect = heroImg.getBoundingClientRect();

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
    <div id="main-wrapper" className="relative w-screen flex flex-col">
      <img
        className="fixed mr-6 py-[calc(72px/2)] top-4 flex self-end z-50 cursor-pointer transition-transform ease-in-out duration-300 !mix-blend-difference hover:fill-green-500"
        src={drawerToggle ? "/frontend/assets/web/icon_drawer_open.svg" : "/frontend/assets/web/icon_drawer_closed.svg"}
        alt="Toggle Drawer"
        height={32}
        width={32}
        onClick={toggleDrawer}
        aria-label={drawerToggle ? "Close Drawer" : "Open Drawer"}
        role="button"
      />
      <header className="resume-header">
        <a href="/"><img className="ml-6 max-lg:hidden scale-0 relative z-50 !isolate" ref={headerRef} src="/frontend/assets/web/profile_logo.png" alt="Profile Logo" width={64} height={64} /></a>
        <div ref={drawerContainerRef} id="drawer-container" className="scale-0 h-screen w-full absolute z-40 top-0 transform transition-transform ease-in-out origin-[calc(100%)_0rem] duration-500">
          <Drawer setDrawerToggle={setDrawerToggle} drawerToggle={drawerToggle} />
        </div>
      </header>
      <main id="main-content" className="relative w-full flex flex-col justify-between items-center gap-8">
        <section ref={heroContainer}>
          <Hero ref={heroRef} />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <WorkExperience />
        </section>
        <section className="overflow-hidden">
          <Projects />
        </section>
      </main>
      <footer className="max-lg:mt-6 bg-white">
        <section id="contact-section" className="w-full flex flex-grow px-6">
          <Contact />
        </section>
      </footer>
    </div>
  );
}

export default App;
