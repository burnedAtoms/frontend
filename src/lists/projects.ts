import Projects from "../components/Projects";

interface Projects {
    projectName: string,
    imgUrl?: string | null,
    videoUrl?: string | null,
    description: string,
    stack: string[],
    contributors: string[] | null,
    gitUrl?: string | null,
}

export const projects:Projects[] = [
    {
        projectName: "LINE Chatbot",
        imgUrl: "/frontend/assets/web/project-assets/line_chatbot_mock.png",
        description: "Automatically Send Rent payment reminders to tenants, schedule apartment viewing dates, setup rent payment schudules etc",
        stack:["Node.js","Javascript","HTML","CSS","DialogFlowCX","Firebase Cloud Functions"],
        contributors:["Zenroy Chance"],
        gitUrl: "https://github.com/burnedAtoms/LIFF-Booking-App",
    },
    {
        projectName: "Notion Task Timer",
        imgUrl: "/frontend/assets/web/project-assets/notion_timeclock_mock.png",
        description: "Athis allows you to track the time spend doing a task on notion.",
        stack:["Node.js","Javascript / TypeScript","HTML","CSS","React.js","Express","PostGreSQL"],
        contributors:["Zenroy Chance"],
        gitUrl: "https://github.com/burnedAtoms/ty_timeclock",
    },
    {
        projectName: "VR SniperSIMS",
        imgUrl: "/frontend/assets/web/project-assets/vr_snipersim_mock.webp",
        description: "SniperSIM (SSM) is a Sniper Simulation VR game built using Unity and C#. This was the product of my VR course's final project.",
        stack:["C#","Unity","Blender"],
        contributors:["Zenroy Chance"],
        gitUrl: "https://github.com/burnedAtoms/VR-Final-Project",
    },
    {
        projectName: "Highlight Translator",
        videoUrl:"/frontend/assets/web/project-assets/highlight-text-translator.mp4",
        description: "a chrome extension that uses gpt-4o to translate highlighted text to a preferred language",
        stack: ["HTML","JavaScript","CSS"],
        contributors: ["Zenroy Chance"],
        gitUrl: "https://github.com/burnedAtoms/HighlightTranslator-Chrome-Ext",
    },
    {
        projectName: "CrosSight",
        imgUrl: null,
        videoUrl: "/frontend/assets/web/project-assets/crossight.mp4",
        description: "A mobile app to assist the visually imparied when crossing the street using Machine Learning and Object Detection.",
        stack: ["Python", "Kotlin","XML"],
        contributors: ["Zenroy Chance", "Alexis Ayuso"],
        gitUrl:"https://gitlab.com/crossight-developement-team/CrosSight",
    },
    {
        projectName: "Nike - Landing Page",
        videoUrl:"/frontend/assets/web/project-assets/nike_mock_video.mp4",
        description: "This is a landing page of the brand Nike. It was Designed and developed to focus on Product Branding",
        stack:["HTML5","CSS","Javascript","React.js"],
        contributors:["Zenroy Chance"],
        gitUrl: "https://github.com/burnedAtoms/Web-Development/tree/master/CSSRefresher",
    },
];