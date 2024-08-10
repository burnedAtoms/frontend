import Projects from "../components/Projects";

interface Projects {
    projectName: string,
    imgUrl?: string | null,
    videoUrl?: string | null,
    description: string,
    stack: string[],
    contributors: string[] | null,
}

export const projects:Projects[] = [
    {
        projectName: "CrosSight",
        imgUrl: null,
        videoUrl: "https://www.youtube.com/watch?v=AUZsOAseg74",
        description: "A mobile app to assist the visually imparied when crossing the street using Machine Learning and Object Detection.",
        stack: ["Python", "Kotlin","XML"],
        contributors: ["Zenroy Chance", "Alexis Ayuso"],
    },
    {
        projectName: "SniperSIMS",
        imgUrl: "",
        description: "SniperSIM (SSM) is a Sniper Simulation VR game built using Unity and C#. This was the product of my VR course's final project.",
        stack:["C#","Unity","Blender"],
        contributors:["Zenroy Chance"],
    },
    {
        projectName: "Highlight Translator",
        videoUrl:"",
        description: "a chrome extension that uses gpt-4o to translate highlighted text to a preferred language",
        stack: ["HTML","JavaScript","CSS"],
        contributors: ["Zenroy Chance"]
    },
    {
        projectName: "Nike - Landing Page",
        videoUrl:"",
        description: "This is a landing page of the brand Nike. It was Designed and developed to focus on Product Branding",
        stack:["HTML5","CSS","Javascript","React.js"],
        contributors:["Zenroy Chance"]
    },
    {
        projectName: "LINE Chatbot",
        imgUrl: "",
        description: "Automatically Send Rent payment reminders to tenants, schedule apartment viewing dates, setup rent payment schudules etc",
        stack:["Node.js","Javascript","HTML","CSS","DialogFlowCX","Firebase Cloud Functions"],
        contributors:["Zenroy Chance"]
    },
    {
        projectName: "Notion Task Timer",
        imgUrl: "",
        description: "Athis allows you to track the time spend doing a task on notion.",
        stack:["Node.js","Javascript / TypeScript","HTML","CSS","React.js","Express","PostGreSQL"],
        contributors:["Zenroy Chance"]
    },
];