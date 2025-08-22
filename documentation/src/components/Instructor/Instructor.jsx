import React from 'react';
import OfficeHours from "../OfficeHours/OfficeHours";
import Figure from "../Figure";
import DontPanic from "../../../static/img/dont-panic.svg";
import Admonition from "@theme/Admonition";
import TeachingAssistants from "../TeachingAssistants";

function CourseSections() {
    return <>
        <h2>Sections</h2>
<ul>
    <li>
        <strong>Section 005</strong>
        <ul>
            <li><strong>Lecture:</strong> Mondays and Wednesday 11:00 am - 12:20 am, Room Tuttleman Learning Center 302</li>
            <li><strong>Lab:</strong> Friday 9:00 am - 10:50 am, Room Biology - Life Science 137</li>
        </ul>
    </li>
</ul>
    </>;
}

export default function Instructor() {
    return (
        // <div className="container">
            <div className="row">
                {/* First Column */}
                <div className="col col--4">
                    <h2>Instructor</h2>
                    <img
                        id="professor-applebaum"
                        className="masked"
                        src="https://s.gravatar.com/avatar/d7050d71af151b8db6f046e33e9e8e2e?s=200"
                        alt="Picture of Professor Ian Tyler Applebaum"
                    />
                    <p><b>Professor Ian Tyler Applebaum</b></p>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
               <li>📧 Email: <a href={"mailto:ian.tyler@temple.edu"}>ian.tyler@temple.edu</a></li>
               {/*<li>💬 Discord: Applebaumian#2888</li>*/}
               <li>🏢 Office: SERC 325</li>
            </ul>
                </div>

                {/* Second Column */}
                <div className="col col--4">
                    <CourseSections/>
                    <TeachingAssistants/>
                </div>

                {/* Third Column */}
                <div className="col col--4">
                    <Figure caption={"Class Motto:"} subcaption={"Design is not just about how something looks."}>
<img style={{width: "100%", height: "auto"}} src="https://media1.tenor.com/m/v7Z6_aeZ1ocAAAAC/patrick-star-idk.gif" />                    </Figure>
                </div>
        </div>
    );
}
