import { useRef } from 'react'
import { skills } from '../lists/skills-list';
import { useGSAP } from '@gsap/react';
import skillsAnim from '../animations/skills-anim';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillsContainer = useRef(null);
    const skillItems = skills;

    useGSAP(() => {
        const skillSet:HTMLDivElement = skillsContainer.current!;
        if(skillSet){
            skillsAnim(skillSet);
        }
    });
    
    return (
        <div className="lg:relative lg:top-16 lg:h-[110vh] flex flex-col items-center overflow-clip box-border">
            <h1 id="skills-heading"><span className="text-green-500">S</span>KILLS</h1>
            <div ref={skillsContainer} id="skills-container" className="tw-skills-container box-border">  
                {skillItems.map((itemName, index) => (
                    <span key={index}>{itemName}</span>
                ))}
            </div>
        </div>
    )
}
export default Skills;