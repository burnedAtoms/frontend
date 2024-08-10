import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { forwardRef, MutableRefObject, useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Hero = forwardRef((props,ref) => {
    const container = useRef(null);

    return (
        <div ref={container} className="relative w-full max-lg:flex max-lg:flex-col max-lg:items-center">
            <img
                ref={ref as MutableRefObject<HTMLImageElement>}
                className="profile-img max-lg:relative max-lg:w-48 max-lg:h-48 lg:absolute lg:top-0 lg:-right-4 lg:w-[calc(36%)] aspect-square"
                src="http://localhost:5173/src/assets/web/profile_logo.png"
            />
            <span className="max-lg:hidden lg:absolute top-[14%] left-[7%] z-20 sansita-swashed text-secondary text-[3vw] xl:text-6xl">Welcome,</span>
            <span className="mt-8 lg:absolute top-[30%] left-[30%] caudex-bold text-white lg:text-[color:#202020] text-[6vw] 2xl:text-[4em] tracking-wider lg:leading-[6rem]">
                My name is <br />Zenroy Chance
            </span>
            <span className="hero-anim lg:absolute bottom-[2rem] right-[4rem] xl:right[10%] z-20 sansita-swashed text-secondary max-2xl:text-[2vw] text-4xl">Scroll to see my journey</span>
            <span className="z-10"><img className="max-lg:hidden lg:w-[calc(90vw)] lg:h-full" src="http://localhost:5173/src/assets/web/hero_bg.svg" alt="" /></span>
        </div>
    )
});

export default Hero