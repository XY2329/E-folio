import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li><b>Programming Languages:</b> Python, Java, JavaScript</li>
                <li><b>Web Development:</b> HTML, CSS, React, Next, Vite</li>
                <li><b>Database Management:</b> SQL, NoSQL</li>
                <li><b>Data Analysis:</b> Data Visualisation, Machine Learning</li>
                <li><b>Cyber Security:</b> Pentest, Security assessment report writing</li>
                <li><b>Others:</b> Dart</li>





<br></br>
<b>Tools:</b> VSCode, Android Studio, Flutter, Kali Linux, Figma, Github, Cloudera
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
            
          <ul className="list-disc pl-2">
            <li>Global Solana Renaissance Hackathon 2024 (April) - Participant</li>
            <li>HILTI IT Competition 2024 (April) - <strong>Semi-Finalist</strong></li>
            <li>APU Solana Hackfest 2024 (April) - Participant</li>
            <li>L'Oréal Brandstorm 2024 (April) - Participant</li>
            <li>Viction Horizon - Startup Hackathon 2023 (December) - <strong>Finalist</strong></li>
            <li>Cili Lado Business Analytics (December 2023) - <strong>1st Place Winner</strong></li>
            <li>Ethereum Kuala Lumpur 2023 Hackathon (ETHKL) (October) - <strong>Aleo Track Winner</strong></li>
            <li>Curtin Malaysia Capture The Flag (CTF) Hackathon 2023 (October) - Participant</li>
            <li>ADA Business Messaging Hackathon 2023 (August) - Participant</li>
            <li>Sustainable Smart City Hackathon 2023 (July) - <strong>Merit Prize</strong></li>
            <li>SAMSUNG UI/UX Hackathon 2023 (June) - Participant</li>
            <li>Taylor's ImagineHack 2023 (May) - Participant</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li><b>Taylor's University -</b> Bachelor of Computer Science (2022-2025)</li>
                <li><b>Taylor's College -</b> Foundation in Science (2021-2022)</li>
                <li><b>Chong Hwa Independent High School -</b> SPM (2016-2021)</li>
          </ul>
        ),
    }
];

const AboutMe = () => {
    
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    
    return(
        <section className="grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/me.jpeg" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">I am currently pursuing a Computer Science degree, specialising in Cyber Security and Artificial Intelligence at Taylor's Univeristy. 
                        Additionally, I've just started to step into the world of Web3 development.
                        My passion for technology and problem-solving has led me to actively participate in hackathons, workshops and events to improve myself. I primarily serve as a Frontend Developer, however, I am not limited to frontend tasks and sometimes take on backend responsibilities. </p>
                    <div className="flex flex-row mt-8">

                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;