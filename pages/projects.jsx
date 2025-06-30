//projects i have worked on
//animate on scroll here? or maybe find some other exciting way to present the projects
import Image from 'next/image';
import Project from '../components/Project'; //<Project proj={projects[0]}

//TODO: list of project objects
const projects = [
    {        title: 'Work in Progress',
        description:
            'Excited to update this page with a new project soon! I have a few ideas in mind and will be working on them over the next few weeks. Stay tuned for updates!',
        bullets: ['Integrating LLM to improve quality of application', 'Hopefully creating a mobile app using a new framework'],
        link: ['']
    },
    {
        title: 'Optimate',
        description:
            'Capstone project for my coding bootcamp. It is our spin on a dating app that features a unique matching algorithm based on user preferences and interests. The app allows users to create profiles, swipe on potential matches, and chat with each other. It was a great learning experience and helped me improve my skills in React, Node.js, and Supabase.',
        bullets: ['I created a chat feature that works in real-time on multiple devices', 'Helped in building the matching algorithm', 'Worked on the UI/UX design to make it user-friendly'],
        link: 'https://github.com/OG-FSA-2208/Optimate'

    },
    {
        title: 'Portfolio',
        description:
            'You\'re looking at it! This is my personal portfolio website built with Next.js. It showcases my projects, skills, and experience. I wanted to create a clean and modern design that highlights my work and makes it easy for potential employers to see what I can do.',
        bullets: ['Built with Next.js and Less', 'Deployed on AWS which was a fun learning experience'],
        link: 'https://github.com/zachty/portfolio'

    },
    {
        title: 'GS Records',
        description:
            'E-commerce website built in React and Node.js. It is a full-stack application that allows users to browse and purchase vinyl records. The app features a shopping cart, user authentication, and an admin panel for managing products. It was a great project to work on and helped me improve my skills in React, Redux, and MongoDB.',
        bullets: ['Worked a lot with the Spotify API to fill database and create store, including song previews when available', 'Completed a user story in which items are added as a guest and then later logged in to purchase'],
        link: 'https://github.com/rugrats2208/graceShopper'

    },
];

export default function Projects() {
    return (
        <div>
            {/* TODO: class style for this list */}
            <h1>Projects</h1>
            <ol>
                {projects.map((project, idx) => (
                    <li key={idx}>
                        <Project proj={project} />
                        <br />
                    </li>
                ))}
            </ol>
        </div>
    );
}
