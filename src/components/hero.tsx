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
        const tl = gsap.timeline({ repeat: -1 });
        const serviceElement:HTMLElement = serviceRef.current!;
        CustomEase.create("custom", "M0,0 C0.042,0.084 0.341,0.708 0.485,0.708 0.61,0.708 0.721,0.476 0.8,0.6 0.895,0.75 0.966,0.931 1,1 ");
        services.forEach((service) => {
            tl.to(serviceElement, {
                opacity: 0,
                x: "-50%",
                duration: 0,
                ease: "custom",
            })
            .to(serviceRef.current, {
                opacity: 1,
                x: "0%",
                duration: 1.5,
                ease: "custom",
                onStart: () => {
                    serviceElement.textContent = service;
                },
            })
            .to(serviceRef.current, {
                opacity: 0,
                x: "50%",
                duration:0.5,
                ease: "custom",
                delay: 1, 
            });
        });

    }, []);

    return (
        <div ref={container} className="relative -top-[6rem] h-screen w-full max-lg:flex max-lg:flex-col max-lg:items-center items-center justify-center">
            <div className="relative w-screen flex flex-row justify-center h-screen items-center overflow-clip">
            <span className="relative z-30 mt-8 w-full hero-header-text flex justify-center font-extrabold leading-[14rem] uppercase">
                ZENROY S. CHANCE
            </span>
                <div className="lg:h-full flex items-center">
                    <img
                    ref={ref as MutableRefObject<HTMLImageElement>}
                    className="absolute -right-[18vw] flex justify-self-center opacity-30 profile-img w-clamp-profile aspect-square object-cover object-[center_top]"
                    src="http://localhost:5173/src/assets/web/profile_logo.png"
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