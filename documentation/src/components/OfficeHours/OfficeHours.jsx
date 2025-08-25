import React, { useState } from 'react';
import {InlineWidget} from "react-calendly";
import docusaurusConfig from "../../../.docusaurus/docusaurus.config.mjs";

export default function OfficeHours() {
    const [showWidget, setShowWidget] = useState(false);

    const toggleWidget = () => {
        setShowWidget(!showWidget);
    };

    return (
        <div>
            <h2 id={"office-hours-professor-applebaum"}>Professor Office Hours</h2>
            <div style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px' }}>
                {/*<h3 style={{ marginBottom: '0.5rem' }}>Professor Ian Applebaum</h3>*/}
                <p style={{ marginBottom: '0.5rem' }}>
                    Office hours are by appointment via Calendly, in person or on Zoom.
                </p>
                <div style={{ marginTop: '0.5rem' }}>
                    <strong>Schedule Office Hours:</strong>
                    <br />
                    {docusaurusConfig.customFields.is_pdf ? (
                        <a
                            href="https://calendly.com/ian-tyler-applebaum/office-hours"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button--primary button--sm"
                            style={{ marginTop: '0.5rem' }}
                        >
                            Schedule an Appointment
                        </a>
                    ) : (
                        <button
                            onClick={toggleWidget}
                            className="button button--primary button--sm"
                            style={{ marginTop: '0.5rem' }}
                        >
                            {showWidget ? 'Hide Scheduling Widget' : 'Schedule an Appointment'}
                        </button>
                    )}

                    {showWidget && !docusaurusConfig.customFields.is_pdf && (
                        <div style={{ marginTop: '1rem' }}>
                            <InlineWidget url="https://calendly.com/ian-tyler-applebaum/office-hours" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
