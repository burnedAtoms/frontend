import { useEffect, useRef, useState } from 'react';
import { educationHistory } from '../lists/education-list';
import { workExperience } from '../lists/work-experience-list';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { loadExperienceAnim } from '../animations/work-experience-anim';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

interface Items {
        leftItems: [string, string | string[]][];
        rightItems: [string, string | string[]][];
        id: string;
}

const WorkExperience = () => {
    const eduRef = useRef(null);
    const workExpRef = useRef(null);
    const [educationItems, setEducationItems] = useState<Items[]>([]);
    const [WorkExperienceItems, setWorkExperienceItems] = useState<Items[]>([]);

    useGSAP(() => {
        if(!eduRef)return;
        if(!workExpRef)return;
        if(eduRef.current && workExpRef.current){
            loadExperienceAnim(eduRef.current,workExpRef.current);
        }
        
    },[eduRef.current,workExpRef.current])

    useEffect(() => {
        const newEducationItems = educationHistory.map((item, index) => {
            const itemsArray = Object.entries(item);
            return {
                leftItems: itemsArray.filter((_, i) => i % 2 === 0),
                rightItems: itemsArray.filter((_, i) => i % 2 !== 0),
                id: `edu-wrapper-${index}`
            };
        });

        const newWorkExperienceItems = workExperience.map((item,index) => {
            const itemsArray = Object.entries(item);
            return {
                leftItems: itemsArray.filter((_, i) => i % 2 === 0),
                rightItems: itemsArray.filter((_, i) => i % 2 !== 0),
                id: `work-exp-wrapper-${index}`
            }
        });
        setEducationItems(newEducationItems);
        setWorkExperienceItems(newWorkExperienceItems);
    }, []);

    return (
        <div id="work-education-container" className="lg:h-[100vh] w-full lg:w-screen bg-primary mx-6 p-4 flex-col gap-8 flex justify-center items-center">
            <div ref={eduRef} id="education-container" className="flex flex-col w-3/5 gap-8 justify-center items-center">
                <h1 id="education-heading" className="text-[5em] text-gray-300">Education</h1>
                {educationItems.map((edu:Items) => (
                    <div key={edu.id} className="flex flex-row items-center w-full border-slate-400 gap-6 border-y-[1px] py-1 ml-6">
                        <div className="col-left h-full flex flex-col justify-stretch items-start flex-grow gap-2">
                            {edu.leftItems.map((item:[string, string | string[]]) => <span className="h-full flex items-center">{item[1]}</span>)}
                        </div>
                        <div className="col-right h-full flex-col flex justify-stretch items-end flex-grow">
                            {edu.rightItems.map((item:[string, string | string[]]) => <span>{item[1]}</span>)}
                        </div>
                    </div>
                ))}
            </div>
            <div ref={workExpRef} id="work-container" className="flex flex-col w-3/5 gap-8 justify-center items-center">
                <h1 id="work-experience-heading" className="text-[5em] text-bold text-gray-300">Work Experience</h1>
                {WorkExperienceItems.map((workExp:Items) => (
                    <div key={workExp.id} className="flex flex-row items-center w-full border-slate-400 gap-6 border-y-[1px] py-1 ml-6">
                        <div className="col-left h-full flex flex-col justify-stretch items-start flex-grow gap-2 text-start">
                            {workExp.leftItems.slice(0,-1).map((item:[string, string | string[]]) => <span className="h-full ">{item[1]}</span>)}
                        </div>
                        <div className="col-right h-full flex-col flex justify-stretch items-end text-end">
                            {workExp.rightItems.map((item:[string, string | string[]]) => <span>{item[1]}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;
