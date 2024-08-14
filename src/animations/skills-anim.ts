import gsap from "gsap";


function skillsAnim(ref: HTMLDivElement) {

    const blurAnim = [{
        opacity: 0,
        filter: `blur(60px)`,
    }, {
        opacity: 1,
        filter: `blur(0px)`,
    }, { startPosition: "<20%" }];
    
    const order = [5, 2, 8, 4, 1, 3, 6, 0, 7];

    const skillsContainer = ref!;
    const skillsMM = gsap.matchMedia();

    if (gsap && skillsContainer.children.length) {
        skillsMM.add("(min-width: 1024px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: skillsContainer,
                    start: "center center",
                    pin: skillsContainer,
                    end: "+=150%",
                    scrub: 1.5,
                }
            });

            tl.fromTo(skillsContainer.children[order[0]], blurAnim[0], blurAnim[1]);
            order.slice(1).forEach((pos) => {
                tl.fromTo(skillsContainer.children[pos], blurAnim[0], blurAnim[1], blurAnim[2].startPosition)
            })

            tl.fromTo(skillsContainer, {
                scale: 1,
                opacity: 1,
                transformOrigin: "center center",
                translateZ: 0,
            }, {
                scale: 500,
                opacity: 0,
                transformOrigin: "center 70%",
                ease: "power2.inOut",
                duration: 1,
            }).fromTo(skillsContainer, {
                scale: 500,
                opacity: 0,
                transformOrigin: "center 70%",
                ease: "power2.inOut",
                immediateRender: false,
            }, {
                scale: 1,
                transformOrigin: "center center",
                ease: "power2.inOut",
                duration: 0.3,
            })

        });
    }
}

export default skillsAnim;