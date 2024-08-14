import { useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projects } from '../lists/projects';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    const projectHeadingRef = useRef(null);
    const projectsContainer = useRef(null);
    const itemsWrapperRef = useRef(null);
    const projectButtonRef = useRef(null);

    const [flippedStates, setFlippedStates] = useState<boolean[]>(Array(projects.length).fill(false));

    useGSAP(() => {
        const projectsElement = projectHeadingRef.current!;
        const projectsContainerDiv = projectsContainer.current!;
        const itemsWrapperElement = itemsWrapperRef.current!;

        const projectsMM = gsap.matchMedia(projectsContainerDiv);
        projectsMM.add("(min-width: 1024px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: projectsContainerDiv,
                    start: "center center",
                    end: "bottom top",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    markers: true,
                },
            });
            tl.to(projectsElement, {
                ease: "power2.inOut",
                opacity: 0,
                translateZ: 0,
            }).fromTo(itemsWrapperElement, {
                immediateRender: false,
                opacity: 0,
                scale: 0.5,
            }, {
                ease: "power1.in",
                opacity: 1,
                translateY: 0,
                scale: 1.1
            }, "-=80%");
        });

    });

    const handleFlipCard = (index: number) => {
        const newFlippedStates = [...flippedStates];
        newFlippedStates[index] = !newFlippedStates[index];
        setFlippedStates(newFlippedStates);

        const cardInner = document.querySelectorAll('.flip-card-inner')[index];
        gsap.to(cardInner, {
            rotateY: newFlippedStates[index] ? 180 : 0, 
            duration: 0.2,
            ease: "power2.inOut"
        });
    };

    return (
        <div ref={projectsContainer} className="relative min-h-[140vh] w-full flex flex-col justify-center items-center">
            <h1 ref={projectHeadingRef} className="projectHeading relative z-10 text-center font-extrabold text-white tracking-widest will-change-[opacity,transform]">PROJECTS</h1>
            <span ref={projectButtonRef} className="flex justify-center items-center absolute bottom-4 px-6 py-3 bg-transparent border-white border-2 rounded-full capitalize hover:bg-green-500 hover:border-transparent bg-clip-padding hover font-semibold text-lg tracking-wider">
                <a href="https://github.com/burnedAtoms?tab=repositories">View Github</a>
            </span>
            <div ref={itemsWrapperRef} className="lg:absolute z-20 gap-4 w-full lg:h-screen lg:w-screen grid lg:grid-cols-3 lg:grid-rows-2 overflow-hidden">
                {projects.map((item, index) => (
                    <div key={index} className="flip-card relative flex justify-center items-center max-lg:h-[24rem] w-full lg:min-w-1/3 lg:min-h-1/2 will-change-transform cursor-pointer" onClick={() => handleFlipCard(index)}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                {item.imgUrl ? (
                                    <img className="absolute z-0 w-full h-full object-cover" src={item.imgUrl} alt="Project Image" />
                                ) : (
                                    <video className="absolute z-0 w-full h-full object-cover" src={item.videoUrl!} autoPlay loop muted></video>
                                )}
                                <div className="overlay absolute inset-0 z-10 flex flex-col justify-center items-center opacity-0 xl:hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-2xl font-semibold mb-2">{item.projectName}</h3>
                                </div>
                            </div>
                            <div className="flip-card-back p-4 shadow-2xl">
                                <div className="mb-4">
                                    {item.stack.map((tech, i) => (
                                        <span key={i} className="bg-green-600 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2 inline-block">{tech}</span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-semibold mb-2">{item.projectName}</h3>
                                <p className="text-center w-2/3 line-clamp-3 capitalize">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;