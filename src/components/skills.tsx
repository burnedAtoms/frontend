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
        <div className="relative h-[100vh] w-full flex flex-col justify-center items-center">
            <h1 className="mt-[12rem] lg:absolute flex text-center text-[20vw] caudex-bold opacity-60">SKILLS</h1>
            <div ref={skillsContainer} id="skills-containter" className="flex flex-wrap gap-6 max-w-[80%] lg:max-w-[50%] justify-center items-center">  
            </div>
        </div>
    )
}
export default Skills;