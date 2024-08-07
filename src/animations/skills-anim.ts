import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const blurAnim = [{
    opacity: 0,
    filter: `blur(60px)`,
}, {
    opacity: 1,
    filter: `blur(0px)`,
}, { startPosition: "<30%" }];

function skillsAnim(ref:HTMLDivElement) {
    const skillsContainer = ref!;
    gsap.registerPlugin(ScrollTrigger);
    const skillsMM = gsap.matchMedia();

    if (gsap && skillsContainer.children.length) {
        skillsMM.add("(min-width: 1024px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: skillsContainer,
                    start: "center center",
                    pin: true,
                    end: "+=100%",
                    scrub: true,
                }
            });

            tl
                .fromTo(skillsContainer.children[5], blurAnim[0], blurAnim[1])
                .fromTo(skillsContainer.children[2], blurAnim[0], blurAnim[1], blurAnim[2].startPosition)
                .fromTo(skillsContainer.children[8], blurAnim[0], blurAnim[1], blurAnim[2].startPosition)
                .fromTo(skillsContainer.children[4], blurAnim[0], blurAnim[1], blurAnim[2].startPosition)
                .fromTo(skillsContainer.children[1], blurAnim[0], blurAnim[1], blurAnim[2].startPosition)
                .fromTo(skillsContainer.children[3], blurAnim[0], blurAnim[1], blurAnim[2].startPosition)
                .fromTo(skillsContainer.children[6], blurAnim[0], blurAnim[1], blurAnim[2].startPosition)
                .fromTo(skillsContainer.children[0], blurAnim[0], blurAnim[1], blurAnim[2].startPosition)
                .fromTo(skillsContainer.children[7], blurAnim[0], blurAnim[1], blurAnim[2].startPosition)
                .fromTo(skillsContainer,{
                    scale:1,
                    opacity:1,
                    transformOrigin:"center center"
                },{
                    scale:500,
                    opacity:0,
                    transformOrigin:"center 70%",
                    ease:"power2.inOut",
                    duration: 1,
                }).fromTo(skillsContainer,{
                    scale:500,
                    opacity:0,
                    transformOrigin:"center 70%",
                    ease:"power2.inOut",
                },{
                    scale:1,
                    transformOrigin:"center center",
                    ease:"power2.inOut",
                    duration: 0.3,
                })

        });
    }
}

export default skillsAnim;