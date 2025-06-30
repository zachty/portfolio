import React from 'react';

export default function Project({ proj }) {
    return (
        <>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <ul>
                {proj.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                ))}
            </ul>
            <a href={proj.link}>{proj.link}</a>
        </>
    );
}
