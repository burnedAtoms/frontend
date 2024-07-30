import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const blurAnim = [{
    opacity: 0,
    filter: `blur(20px)`,
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
                    start: "center center+=50px",
                    pin: true,
                    end: "1400px center",
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
        });
    }
}

export default skillsAnim;