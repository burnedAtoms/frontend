import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CustomEase } from "gsap/CustomEase";
import { forwardRef, MutableRefObject, useRef } from 'react';
import { services } from '../lists/services';

gsap.registerPlugin(CustomEase);

const Hero = forwardRef((props,ref) => {
    const container = useRef(null);
    const serviceRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            ease: "custom", 
            repeat: -1 });
        const serviceElement:HTMLElement = serviceRef.current!;
        CustomEase.create("custom", "M0,0 C0.042,0.084 0.341,0.708 0.485,0.708 0.61,0.708 0.721,0.476 0.8,0.6 0.895,0.75 0.966,0.931 1,1 ");
        services.forEach((service) => {
            tl.to(serviceElement, {
                opacity: 0,
                x: "-50%",
                duration: 0,
            })
            .to(serviceElement, {
                opacity: 1,
                x: "0%",
                duration: 2,
                immediateRender:false,
                onStart: () => {
                    serviceElement.textContent = service;
                },
            })
            .to(serviceElement, {
                opacity: 0,
                x: "50%",
                duration:0.5,
                immediateRender:false,
                delay: 1, 
            });
        });

    }, []);

    return (
        <div ref={container} className="relative -top-[6rem] h-screen w-full max-lg:flex max-lg:flex-col max-lg:items-center items-center justify-center">
            <div className="relative w-screen flex max-lg:flex-col flex-row justify-center h-screen items-center overflow-clip">
            <span className="relative z-30 mt-8 hero-header-text flex max-lg:items-center text-center lg:justify-center font-extrabold max-md:leading-[6rem] leading-[12rem] uppercase">
                ZENROY CHANCE
            </span>
                <div className="lg:h-full flex max-lg:justify-center items-center">
                    <img
                    ref={ref as MutableRefObject<HTMLImageElement>}
                    className="absolute max-lg:top-[30vh] lg:-right-[18vw] flex justify-self-center opacity-30 profile-img w-clamp-profile aspect-square object-cover object-[center_top]"
                    src="http://localhost:5173/frontend/src/assets/web/profile_logo.png"
                />
                </div>
            </div>
            <div className="absolute bottom-0 bg-white py-8 w-full gap-4 flex justify-center items-center">
            <h2 ref={serviceRef} className="text-2xl text-secondary caudex-regular font-extrabold uppercase">
            </h2>
            </div>
        </div>
    )
});

export default Hero