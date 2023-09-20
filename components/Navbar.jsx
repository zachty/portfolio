import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <Link href={'/'}>Home </Link>
            <Link href={'/about'}>About me </Link>
            <Link href={'/resume'}>Resume </Link>
            <Link href={'/projects'}>Projects </Link>
            <Link href={'/contact'}>Contact </Link>
        </nav>
    );
}
