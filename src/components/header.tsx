import React from 'react'

const Header = () => {
    return (
        <header className="resume-header">
            <a href="/"><img src="http://localhost:5173/src/assets/profile_logo.png" alt="" width={64} height={64} /></a>
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
}

export default Header