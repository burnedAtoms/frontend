import React, { useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projects } from '../lists/projects';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    const projectHeadingRef = useRef(null);
    const projectsContainer = useRef(null);

    useGSAP(() => {
        const projectsElement = projectHeadingRef.current!
        const projectsContainerDiv = projectsContainer.current!;
        const projectsMM = gsap.matchMedia(projectsElement);
        projectsMM.add("(min-width: 1024px)", () => {
            gsap.to(projectsElement,{
                scrollTrigger: {
                    trigger: projectsElement,
                    start: "top center-=20%",
                    scrub: true,
                    pin: projectsContainerDiv,
                },
                opacity: 0
            })
        })
        
    })

    return (
        <div ref={projectsContainer} className="relatiive self-center flex justify-center items-center mt-[10%]">
            <h1 ref={projectHeadingRef} className="projectHeading relative z-20 text-center text-[15rem] font-extrabold text-white tracking-widest">PROJECTS</h1>
            <div className="absolute h-screen w-screen overflow-hidden grid grid-cols-3 grid-rows-2 border-2 border-red-500">
                {
                    projects.map((item) => {
                        return (
                            <div className="flex justify-center items-center min-w-1/3 min-h-1/2 border-2 border-cyan-500">
                                <h1>{item.projectName}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;