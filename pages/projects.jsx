//projects i have worked on
//animate on scroll here? or maybe find some other exciting way to present the projects
import Image from 'next/image';
import Project from '../components/Project'; //<Project proj={projects[0]}

//TODO: list of project objects
const projects = [
    {
        title: 'Project 1',
        description:
            'Short description of project upon clicking image or title. Description of what I did. Bullet points from resume and what not. Any challenges and how they were overcome. Link to site/github/videos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, natus qui! Quibusdam minus est maiores minima excepturi tempore dolorem consectetur, quisquam, cupiditate quia accusamus, nostrum vel a velit rem! Rem.',
        bullets: ['did this', 'did this too'],
    },
    {
        title: 'Project 2',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, natus qui! Quibusdam minus est maiores minima excepturi tempore dolorem consectetur, quisquam, cupiditate quia accusamus, nostrum vel a velit rem! Rem.',
        bullets: ['did this on this', 'did this as well'],
    },
    {
        title: 'Project 3',
        description:
            'Checking to see if I can easily add components and everything works okay. Will need to heavily CSS here and add in the AoS. Feels like its all coming together though!',
        bullets: ['important point 1', 'maybe a less important point :('],
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
                    </li>
                ))}
            </ol>
        </div>
    );
}
