import React, { useEffect, useRef } from 'react'
import { skills } from '../lists/skills-list';
import { useGSAP } from '@gsap/react';
import skillsAnim from '../animations/skills-anim';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillsContainer = useRef(null);
    const skillItems = skills;
    const skillWrapper:string[] = [];
    Array.from(skillItems.map(itemName => skillWrapper.push(`<span>${itemName}</span>`)));

    useEffect(() => {
        const skillSet:HTMLDivElement = skillsContainer.current!;
        if(skillSet && !skillSet.innerHTML.length){
            skillWrapper.forEach(element => {
                skillSet.innerHTML += element;
            });
        }
    },[]);

    useGSAP(() => {
        const skillSet:HTMLDivElement = skillsContainer.current!;
        skillsAnim(skillSet);
    })
    

    
    return (
        <div className="lg:relative lg:top-16 lg:h-[110vh] flex flex-col items-center">
            <h1 id="skills-heading" className="lg:absolute flex text-center text-[15vw] caudex-bold text-gray-300">SKILLS</h1>
            <div ref={skillsContainer} id="skills-container" className="tw-skills-container">  
            </div>
        </div>
    )
}
export default Skills;