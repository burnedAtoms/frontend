import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { forwardRef, MutableRefObject, useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Hero = forwardRef((props,ref) => {
    const container = useRef(null);

    return (
        <section ref={container} className="relative max-lg:flex max-lg:flex-col max-lg:items-center">
            <img
                ref={ref as MutableRefObject<HTMLImageElement>}
                className="profile-img max-lg:relative max-lg:w-48 max-lg:h-48 lg:absolute lg:top-0 lg:-right-4 lg:w-[calc(36%)] aspect-square"
                src="http://localhost:5173/src/assets/web/profile_logo.png"
            />
            <span className="max-lg:hidden lg:absolute top-[calc(6vw)] left-[calc(8vw)] z-20 font sansita-swashed text-secondary text-[calc(3vw)]">Welcome,</span>
            <span className="lg:absolute top-[calc(15vw)] left-[calc(30vw)] caudex-bold text-[color:#202020] text-[calc(4vw)] tracking-wider leading-[calc(6vw)]">
                My name is <br />Zenroy Chance
            </span>
            <span className="hero-anim lg:absolute bottom-[calc(1vw)] right-[calc(9vw)] z-20 sansita-swashed text-secondary md:text-[calc(2vw)] min-w-8">Scroll to see my journey</span>
            <span className="z-10"><img className="max-lg:hidden w-[calc(90vw)] h-full" src="http://localhost:5173/src/assets/web/hero_bg.svg" alt="" /></span>
        </section>
    )
});

export default Hero