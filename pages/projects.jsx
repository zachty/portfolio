//projects i have worked on
//animate on scroll here? or maybe find some other exciting way to present the projects
import Image from 'next/image';

//TODO: make project component, pass each project as a prop
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
];

export default function Projects() {
    return (
        <div>
            {/* TODO: make project component, class style for this lisyt */}
            <h1>Projects</h1>
            <ol>
                <li>
                    <h2>Project 1</h2> Short description of project upon
                    clicking image or title. Description of what I did. Bullet
                    points from resume and what not. Any challenges and how they
                    were overcome. Link to site/github/videos. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Voluptate, natus qui!
                    Quibusdam minus est maiores minima excepturi tempore dolorem
                    consectetur, quisquam, cupiditate quia accusamus, nostrum
                    vel a velit rem! Rem.
                </li>
                <li>project2</li>
                <li>project3</li>
                <li>project4</li>
            </ol>
        </div>
    );
}
