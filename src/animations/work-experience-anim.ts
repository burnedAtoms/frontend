import gsap from 'gsap';


export function loadExperienceAnim(eduRef:HTMLElement,workExpRef:HTMLElement){
    const mm = gsap.matchMedia(eduRef);
    if(eduRef && eduRef.children.length > 1){
        mm.add("(min-width: 1024px)", () => {
            eduItemsTimeline(eduRef);
            workExpTimeline(workExpRef);
        })
    }

    function eduItemsTimeline(eduRef:HTMLElement){
        const eduTL = gsap.timeline({
            scrollTrigger: {
                trigger: eduRef,
                start: "center center+=100px",
                end: "bottom top",
                onLeaveBack: (self) => {
                    self.animation?.duration(0.3);
                    self.animation?.reverse();
                },
                onEnter: (self) => {
                    self.animation?.duration(1);
                },
            }
        });

        timelineBody(eduTL,eduRef);
        
    }

    function workExpTimeline(workExpRef:HTMLElement){
        const workExpTL = gsap.timeline({
            scrollTrigger: {
                trigger: workExpRef,
                start: "top center+=50px",
                end: "bottom top",
                onLeaveBack: (self) => {
                    self.animation?.duration(0.3);
                    self.animation?.reverse();
                },
                onEnter: (self) => {
                    self.animation?.duration(1);
                },
            }
        });
        timelineBody(workExpTL,workExpRef)
    }

    function timelineBody(tl:gsap.core.Timeline,ref:HTMLElement){
        tl.fromTo(ref.querySelectorAll('h1'),{
            opacity: 0,
            
        },{
            opacity: 1,
        })
        .from(ref.querySelectorAll('.flex-row'), {
            opacity: 0,
            x: -50,
            stagger: 0.2,
        });
    }
}