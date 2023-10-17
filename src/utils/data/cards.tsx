// Cards
import photographer from "../../images/photographer.jpg";
import osteopathe from "../../images/andrea-ostheopahte.jpeg";
import fire from "../../images/bbq.jpg";
import geek from "../../images/counter-kills.jpeg";

// Props
export interface Project {
    id: number,
    title: string,
    description: string,
    functionalities: string,
    tools: string,
    imgCard: any,
    altCard: string,
    link: string,
    github: string,
    lg: number,
    md:number
}

export const projectData: Project[] = [
    {
        id:1,
        title:"Charles Cantin",
        description:"Professional Photographer specialized in capturing the beauty and emotions of weddings, anniversaries, and personalized photo shoots.",
        functionalities: "This photographer's website impresses with its responsive design and utilizes Firebase database to showcase his portfolio, includes a secure contact form and is deployed by Vercel.",
        tools:"NextJs, Mui, Framer Motion, Firebase, Formik, Yup, Vercel.",
        imgCard:photographer,
        altCard:"Photographer",
        link:"https://charles-cantin-photographer.vercel.app/",
        github:"https://github.com/LeonelDenett/Charles-Cantin-Photographer",
        lg: 5,
        md: 6
    },
    {
        id:2,
        title:"Andréa Pot",
        description:"New osteopath at Cabinet Médical de la Baie in Plounéour-Trez",
        functionalities: "Andrea Pot Osteopath's website is a standout for its responsive, intuitive, and user-friendly design, allowing visitors to conveniently schedule appointments through Doctolib, make direct calls, and access the office location via a dedicated button that integrates with Google Maps.",
        tools:"NextJs, Mui, Framer Motion, Vercel.",
        imgCard:osteopathe,
        altCard:"Osteopathe",
        link:"https://andrea-pot-osteopathe.vercel.app/",
        github:"https://github.com/LeonelDenett/andrea-pot-osteopathe",
        lg: 7,
        md: 6
    },
    {
        id:3,
        title:"BBQ Recipes",
        description:"BBQ Master is my first mobile application who helps people to discover authentic Argentine BBQ recipes and grilling like a true barbecue enthusiast.",
        functionalities: "BBQ Master is an Argentine BBQ recipes mobile application that excels in offering a vast collection of recipes loaded seamlessly from Firebase. It boasts a secure authentication and authorization system, enabling users to save their favorite recipes, ensuring a delightful cooking experience.",
        tools:"React Native, Expo, Formik, Yup, Firebase.",
        imgCard:fire,
        altCard:"BBQ Recipes",
        link:"https://andrea-pot-osteopathe.vercel.app/",
        github:"https://github.com/LeonelDenett/andrea-pot-osteopathe",
        lg: 7,
        md: 6
    },
    {
        id:4,
        title:"Cod Counter",
        description:"Cod Counter is my own platform to track and compare stats among friends.",
        functionalities:"Cod Counter stands out with its gamer-style interface, providing a secure authentication and verification system for creating profiles and safely storing statistics in Firebase, making it the perfect hub for tracking and comparing Call of Duty stats among friends.",
        tools:"NextJs, Mui, Framer Motion, Formik, Yup, Firebase, Vercel",
        imgCard:geek,
        altCard:"Cod Counter",
        link:"https://cod-counter.vercel.app/auth/login",
        github:"https://github.com/LeonelDenett/virgo-anotador-pro",
        lg: 5,
        md: 6
    },
]