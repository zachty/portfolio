//landing page -- what do you want them to see first?
import Image from 'next/image'; //errors pop up with this using static site, maybe switch to amplify?
import Link from 'next/link';

export default function Home({ formattedDate }) {
    return (
        <>
            {/* nav component? */}
            <nav>
                <Link href={'/about'}>About me</Link>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/projects'}>Projects</Link>
                <Link href={'/resume'}>Resume</Link>
            </nav>
            <h1>This site is under construction! Come back soon!</h1>
            <Image
                src="/construction.png"
                alt="construction icon"
                width={512}
                height={512}
            />
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
                <a href="/ssr">View a 404 page.</a>
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
