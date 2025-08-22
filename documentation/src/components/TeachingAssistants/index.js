import React from "react";

export default function TeachingAssistants() {
    const tas = [
        { name: "Mohammad Siahkamari", email: "mohammad.siahkamari@temple.edu" },
        // { name: "Thanh Nguyen", email: "thanh.png@temple.edu" }
    ];

    return <>
        <h2>Teaching Assistant{tas.length > 1 ? 's' : ''}</h2>
        <ul>
            {tas.map((ta, index) => (
                <li key={index}>{ta.name}: <a href={`mailto:${ta.email}`}>{ta.email}</a></li>
            ))}
        </ul>
    </>;
}
