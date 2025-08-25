import React from "react";

export default function TeachingAssistants() {
    const tas = [
        {
            name: "Mohammad Siahkamari",
            email: "mohammad.siahkamari@temple.edu",
            calendlyLink: "https://calendly.com/tut46173-temple/new-meeting" // Add your actual Calendly link here
        },
        // {
        //     name: "Thanh Nguyen",
        //     email: "thanh.png@temple.edu",
        //     calendlyLink: "https://calendly.com/thanh-nguyen" // Add actual Calendly link when available
        // }
    ];

    return <>
        <h2>Teaching Assistant{tas.length > 1 ? 's' : ''}</h2>
        {tas.map((ta, index) => (
            <div key={index} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{ta.name}</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    <strong>Email:</strong> <a href={`mailto:${ta.email}`}>{ta.email}</a>
                </p>
                {ta.calendlyLink && (
                    <div style={{ marginTop: '0.5rem' }}>
                        <strong>Office Hours:</strong>
                        <br />
                        <a
                            href={ta.calendlyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button--primary button--sm"
                            style={{ marginTop: '0.5rem' }}
                        >
                            Schedule Office Hours
                        </a>
                    </div>
                )}
            </div>
        ))}
    </>;
}
