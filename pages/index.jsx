//landing page -- what do you want them to see first?
import Image from 'next/image'; //errors pop up with this using static site, maybe switch to amplify?
import Link from 'next/link';

export default function Home({ formattedDate }) {
    return (
        <>
            <h1>This site is under construction! Come back soon!</h1>
            <Image
                src="/construction.png"
                alt="construction icon"
                width={512}
                height={512}
                align="center"style={{ display: 'block', margin: '0 auto' }}
            />
            <p>
                Welcome to my website! Browse around and check out my work, read a bit about me, or jump straght to the resume to see if you want to contact me for work! I&apos;m just messing around with Next.js currently but hope to start a new project soon!
            </p>
            <p>
                <a
                    href="https://www.flaticon.com/free-icons/construction"
                    title="construction icons"
                >
                    Construction icons created by Linector - Flaticon
                </a>
            </p>
            <p>This page is static. It was built on {formattedDate}.</p>
            <p>
                <Link href="/ssr">View a server side rendered page.</Link>
            </p>
            <p>
                <a href="/qwinuehwqln">view a 404</a>
            </p>
        </>
    );
}

export async function getStaticProps() {
    const buildDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'long',
        timeStyle: 'long',
    }).format(buildDate);

    return { props: { formattedDate } };
}
