import React, { useEffect, useRef } from 'react'
import { skills } from '../lists/skills-list';
import { useGSAP } from '@gsap/react';
import skillsAnim from '../animations/skills-anim';

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
        <div className="lg:relative lg:top-16 h-[100vh] w-full flex flex-col justify-center items-center">
            <h1 id="skills-heading" className="lg:mt-[12rem] lg:absolute flex text-center text-[15vw] caudex-bold opacity-60">SKILLS</h1>
            <div ref={skillsContainer} id="skills-container" className="tw-skills-container">  
            </div>
        </div>
    )
}
export default Skills;