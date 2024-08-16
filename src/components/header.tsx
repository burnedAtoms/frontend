import { forwardRef, MutableRefObject } from "react"


const Header = forwardRef((_props,ref) => {

    function scrollToNavItem(itemId:string){
        return document.getElementById(itemId)?.scrollIntoView({behavior: "smooth"});
    }
    return (
        <header className="resume-header">
            <a href="/"><img className="max-lg:hidden scale-0" ref={ref as MutableRefObject<HTMLImageElement>} src="/frontend/assets/web/profile_logo.png" alt="" width={64} height={64} /></a>
            <span className="header-items-wrapper" onClick={() => scrollToNavItem("hero-container")}>
                About
            </span>
            <span className="header-items-wrapper" onClick={() => scrollToNavItem("work-education-container")}>
                Work Experience
            </span>
            <span className="header-items-wrapper" onClick={() => scrollToNavItem("skills-heading")}>
                Skills
            </span>
            <span className="header-items-wrapper" onClick={() => scrollToNavItem("projects-container")}>
                Project
            </span>
            <span className="header-items-wrapper" onClick={() => {scrollToNavItem("contact-container")}}>
                Contact
            </span>
        </header>
    )
});

export default Header