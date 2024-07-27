import { useRef } from 'react';
import './App.css';
import Sections from './components/index';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const {Header,Hero} = Sections;

function App() {

  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const heroContainer = useRef(null);

  useGSAP(async () => {
    const heroImg = heroRef.current;
    const headerLogo = headerRef.current;
    const mm = gsap.matchMedia();

    

    if (heroImg && headerLogo) {
      mm.add("(min-width: 768px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: heroImg,
              start: "top 80px",
              scrub: true,
              toggleActions: "reverse",
            },
          }
        );
        tl.to(heroImg, {
          x:"-220%",
          y:"5.5vw",
          scale: 0.05,
          autoAlpha: 0,
          duration: 2,
        }).fromTo(headerLogo, {
          scale: 0,
        },{
          scale: 1
        })
      })
    } 
}, {scope: heroContainer, dependencies:[window.innerWidth]});


  return (
    <>
      <Header ref={headerRef}/>
      <main className="relative">
        <section ref={heroContainer}>
          <Hero ref={heroRef} />
        </section>
        <div className="h-[calc(100vh)] w-[calc(100vw)]"></div>
      </main>
    </>
  )
}

export default App
