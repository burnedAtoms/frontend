const Footer = () => {
    const socials = [
        { name: "Github", socialUrl: "https://github.com/burnedAtoms", iconUrl: "/frontend/assets/web/github-mark-white.svg" },
        { name: "LinkedIn", socialUrl: "https://www.linkedin.com/in/zenroy-chance-z784c/", iconUrl: "/frontend/assets/web/linkedin.svg" },
    ]
    return (
        <div id="footer-container" className="mt-10 lg:mt-[4rem] text-[font-family:poppins]">
            <div id="socials-wrapper" className="flex flex-col gap-8 text-primary">
                <div className="flex justify-center items-center gap-6">
                    {socials.map(item => (
                        <a className="flex flex-row justify-center items-center hover:text-green-500 gap-2 cursor-pointer" href={item.socialUrl}>
                            <span>
                                <img width={24} height={24} src={item.iconUrl}></img>
                            </span>
                            <span>
                                {item.name}
                            </span>
                        </a>
                    ))}
                </div>
                <div className="mt-6 text-black/40">
                    <span>Zenroy S. Chance - Copyright @ 2024 </span>
                </div>
            </div>
        </div>
    )
}

export default Footer