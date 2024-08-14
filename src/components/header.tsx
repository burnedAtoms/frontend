import { forwardRef, MutableRefObject } from "react"


const Header = forwardRef((ref) => {
    return (
        <header className="resume-header">
            <a href="/"><img className="max-lg:hidden scale-0" ref={ref as MutableRefObject<HTMLImageElement>} src="http://localhost:5173/src/assets/web/profile_logo.png" alt="" width={64} height={64} /></a>
            <span className="header-items-wrapper">
                About
            </span>
            <span className="header-items-wrapper">
                Work Experience
            </span>
            <span className="header-items-wrapper">
                Skills
            </span>
            <span className="header-items-wrapper">
                Project
            </span>
            <span className="header-items-wrapper">
                Contact
            </span>
        </header>
    )
});

export default Header