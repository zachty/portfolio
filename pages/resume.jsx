//downloadable resume?
//TODO: less constraints on length here so make it a bit longer
export default function Resume() {
    return (
        <div id="resume">
            <h2>Resume</h2>
            <button>Download</button>
            <h3>Skills</h3>
            <ul>
                <li>Javascript</li>
                <li>Node</li>
                <li>React</li>
                <li>Redux</li>
                <li>Git</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li>Next</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>less</li>
                {/* ^^^ proficient ^^^ */}
                <li>C++</li>
                <li>Python</li>
                <li>Matlab</li>
                <li>Mathematica</li>
                <li>Amazon Web Services</li>
                <li>Supabase</li>
            </ul>
            <h3>Experience</h3>
            <ol>
                <li>
                    <h4>
                        Research Assistant | Purdue University - West Lafayette
                        | April 2020 - August 2020
                    </h4>
                    <ul>
                        <li>
                            Conducted extensive research in theoretical physics
                            and quantum mechanics, focusing on calculating the
                            Raman coupling strength of Rubidium condensate using
                            Mathematica.
                        </li>
                        <li>
                            Developed and implemented optimized optical setups
                            to maximize the coupling efficiency of lasers,
                            resulting in enhanced experimental outcomes.
                        </li>
                        <li>
                            Demonstrated expertise in handling delicate and
                            expensive optical equipment, including a class 4
                            laser, ensuring a safe working environment.
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>
                        Arabic Cryptologic Linguist | United States Marine Corps
                        | September 2012 - September 2017
                    </h4>
                    <ul>
                        <li>
                            Obtained and maintained a TS/SCI Security Clearance,
                            ensuring the protection of sensitive information.
                        </li>
                        <li>
                            Proactively sought training opportunities for a team
                            of 120 employees, enhancing their language and
                            analytical skills and resulting in improved
                            performance.
                        </li>
                        <li>
                            Effectively managed a team of four co-workers in
                            administrative tasks, streamlining workflow and
                            fostering a productive work environment.
                        </li>
                    </ul>
                </li>
                {/* <li>
                    <h4>Experience 3</h4>
                    <ul>
                        <li>point 1</li>
                        <li>point 2</li>
                        <li>point 3</li>
                    </ul>
                </li>
                <li>
                    <h4>Experience 4</h4>
                    <ul>
                        <li>point 1</li>
                        <li>point 2</li>
                        <li>point 3</li>
                    </ul>
                </li> */}
            </ol>
            <h3>Education</h3>
            <ol>
                <li>
                    <h4>Fullstack Academy Web Development Bootcamp</h4>
                    <br />
                    Brooklyn, NY | 2022
                </li>
                <li>
                    {/* TODO: change this to escape character?? */}
                    <h4>{`Bachelor's of Science in Physics`}</h4>
                    <br />
                    University of California, Santa Barbara | Santa Barbara, CA
                    | 2021 | Honors | 3.64 GPA
                    <br />
                    <strong>Relevent Courses:</strong> Computational Physics,
                    Data Structures & Algorithms
                </li>
                <li>
                    <h4>Associate of Arts in Levantine Arabic</h4>
                    <br />
                    Defense Language Institute | Monterey, CA | 2015
                </li>
            </ol>
            <h3>Involvement</h3>
            <ol>
                <li>
                    <h4>Habitat for Humanity</h4> | Volunteer | January 2018 -
                    Present
                    <ul>
                        <li>
                            {' '}
                            Actively participate in home construction and
                            renovation projects to provide affordable housing
                            for low-income families in the community.
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>Foothill Elementary School</h4> | Tutor | February 2013
                    - October 2013
                    <ul>
                        <li>
                            Tutored over ten non-native English speakers in
                            mathematics and science concepts, using activities
                            that incorporated language and logic, resulting in
                            improved test scores and a higher pass rate for the
                            class on standardized exams
                        </li>
                    </ul>
                </li>
                {/* <li>
                    <h4>Volunteer 4</h4>
                    <ul>
                        <li>point 1</li>
                    </ul>
                </li> */}
            </ol>
        </div>
    );
}
