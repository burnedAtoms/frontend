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
                },
            });
            tl.to(projectsElement, {
                ease: "power2.inOut",
                opacity: 0,
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
        <div id="projects-container" ref={projectsContainer} className="min-h-[120vh] w-full flex flex-col justify-center items-center">
            <h1 ref={projectHeadingRef} className="projectHeading"><span className="text-green-500">P</span>ROJECTS</h1>
            <div ref={itemsWrapperRef} className="lg:absolute z-20 gap-4 w-full lg:h-screen lg:w-screen grid lg:grid-cols-3 lg:grid-rows-2 overflow-hidden">
                {projects.map((item, index) => (
                    <div key={index} className="flip-card relative z-30 flex justify-center items-center max-lg:h-[24rem] w-full lg:min-w-1/3 lg:min-h-1/2 cursor-pointer" onClick={() => handleFlipCard(index)}>
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
                                <a onClick={(e) => e.stopPropagation()} className="relative bottom-5 z-30 flex justify-self-end mt-10 px-4 py-2 bg-transparent border-white border-2 rounded-full capitalize hover:bg-green-600 hover:border-transparent box-border font-semibold text-sm tracking-wider" href={item.gitUrl!}>View Github</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;