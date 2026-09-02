import { accounts } from "./info.js";
import eCommerceImage from "../assets/MyProjects/E-Commerce.png";
import FinanceTrackerImage from "../assets/MyProjects/Finance_Tracker.png";
import EducationalPlatformImage from "../assets/MyProjects/Educational-Platform.png";

export const myProjects = [
    {
        title: "E-Commerce",
        description: "A full-featured e-commerce platform simulating a full-stack architecture on the client side. Includes auth flows, protected routes, stock tracking, cart/wishlist management, and order history with isolated user data via LocalStorage.",
        technologies: ["React", "TypeScript", "Redux Toolkit", "React Router DOM", "Bootstrap", "Local Storage", "React Hook Form", "Zod"],
        image: eCommerceImage,
        liveLink: "https://e-commerce-abdallah.vercel.app/",
        isRepoAvailable: true,
        repoLink: `${accounts.github.link}/E-Commerce`
    },
    {
        title: "Educational Platform",
        description: "An interactive e-learning platform that allows users to explore courses, filter by categories, view detailed curriculums, and manage course enrollments using a streamlined cart and purchase workflow.",
        technologies: ["React", "Redux Toolkit", "React Router DOM", "Bootstrap", "Local Storage"],
        image: EducationalPlatformImage,
        liveLink: "https://educational-platform-abdallah.vercel.app",
        isRepoAvailable: true,
        repoLink: `${accounts.github.link}/Educational-Platform`
    },
    {
        title: "Finance Tracker",
        description: "A finance tracker app that allows users to manage their incomes and outcomes, providing a simple UI, efficient data management and charts to visualize spending patterns.",
        technologies: ["React", "TypeScript", "Tailwind", "Local Storage", "Context API"],
        image: FinanceTrackerImage,
        liveLink: "https://finance-tracker-abdallah.vercel.app",
        isRepoAvailable: true,
        repoLink: `${accounts.github.link}/Finance_Tracker`
    }
];