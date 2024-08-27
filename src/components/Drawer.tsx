interface NavItem {
    title: string,
    link?: string,
}

interface DrawerProps {
    setDrawerToggle: (isOpen: boolean) => void;
    drawerToggle: boolean;
}

const Drawer = ({setDrawerToggle}: DrawerProps) => {
    const navItems:NavItem[] = [
        {
            title: "About",
            link: "#hero-container",
        },{
            title: "Skills",
            link: "#skills-heading",
        },{
            title: "Experience",
            link: "#work-education-container",
        },{
            title: "Projects",
            link: "#projects-container",
        },{
            title: "Contact",
            link: "#contact-container",
        }];
    return (
        <div id="drawer-wrapper" className="absolute -top-4 z-40 w-screen h-screen bg-primary flex flex-col items-center overflow-hidden !mix-blend-normal">
            {
                navItems.map((item,index) => (
                    <a className="nav-items" 
                    key={index} 
                    href={item.link}
                    onClick={() => setDrawerToggle(false)}><span>{item.title}</span></a>
                ))
            }
        </div>
    )
}

export default Drawer;
