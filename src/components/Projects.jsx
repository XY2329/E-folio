import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    id: 1,
    title: "Cili Lado Business Analytics",
    description: "Project for ITS69304 Data Analytics and Machine Learning module.",
    image: "/cili.jpg",
    gitUrl:"https://github.com/JingYuan0926/ChiliLado",
    pptUrl: "https://www.canva.com/design/DAFzvbfiLkA/TLfZDpvKa0pg3H3nkKtwrQ/edit"

  },
  {
    id: 2,
    title: "TicketWave",
    description: "Project for multiple Web3 competition.",
    image: "/twave.png",
    gitUrl:"https://github.com/JingYuan0926/Solana",
    pptUrl: "https://www.canva.com/design/DAGBQdApRb4/C3keLQD-hHMST6dtFpaj1Q/edit"
  },
  {
    id: 3,
    title: "ProFolio",
    description: "Project for HILTI IT Competition 2024.",
    image: "/hilti.png",
    gitUrl:"https://github.com/JingYuan0926/Hilti-Profolio",
    pptUrl: "https://www.canva.com/design/DAGCIA4FQxg/e-8j0i2sMon1qSobLE5_BA/edit"
  },
  {
    id: 4,
    title: "AgroTech",
    description: "Project for Sustainable Smart City Hackathon 2023.",
    image: "/agro.png",
    gitUrl:"",
    pptUrl: "https://www.canva.com/design/DAFqpeByQWE/7uCvU45yB2FZRHYMCpL-gg/edit"
  },
  {
    id: 5,
    title: "DREAM",
    description: "Project for Taylor's ImagineHack 2023.",
    image: "/dream.png",
    gitUrl:"https://www.figma.com/proto/aNokyxK7gpg5VRNdExEW8Y/DREAM?page-id=0%3A1&node-id=7-1155&viewport=266%2C453%2C0.09&t=JNldTPDz63OboyQ1-1&scaling=scale-down&starting-point-node-id=7%3A1155",
    pptUrl: "https://www.canva.com/design/DAFjeHG_f0E/VjeLv0DiLaG4B0-BWrm4jg/edit"

  },
  {
    id: 6,
    title: "ZUS",
    description: "Project for SAMSUNG UI/UX Hackathon 2023.",
    image: "/zus.png",
    gitUrl:"https://www.figma.com/proto/GvUP8juHkphB2UqVj1gdiV/Untitled?page-id=0%3A1&node-id=29-202&viewport=-537%2C259%2C1.09&t=qJ7OhCuUo5NZwwyK-1&scaling=min-zoom&starting-point-node-id=39%3A96",
    pptUrl: "https://www.canva.com/design/DAFlwHhxywQ/0ZiA9o7TNSMBSXKklBMF1w/edit"
  },
  {
    id: 7,
    title: "Live'Open Réal",
    description: "Project for L'Oréal Brandstorm 2024.",
    image: "/loreal.png",
    gitUrl:"",
    pptUrl: "https://www.canva.com/design/DAGAY7qGnKo/b_0XVFp2UbVdZb-Dq-NJww/edit"

  },
  /*
  {
    id: 8,
    title: "SafeConnect",
    description: "Project for ITS66404 Software Engineering module.",
    image: "public/safe.png",
    gitUrl:"https://www.figma.com/proto/fEFdytGTqPoH5sEwnGu0f1/Prototyping-in-Figma?page-id=0%3A1&node-id=215-392&viewport=14%2C505%2C0.1&t=7cRHfYsu2zt0GRHL-1&scaling=scale-down&starting-point-node-id=0%3A627&show-proto-sidebar=1",
    pptUrl: "https://www.canva.com/design/DAFa_YaWCi8/LlKfmG9rDwUOJs6ArHvEeg/edit"

  },*/
];

const Projects = () => {
  return (
    <section className="grid" id="projects">
    <div>
      <div className='text-4xl font-semibold mb-8'>MyProject</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-row-2 gap-x-8 gap-y-4 h-full'>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            pptUrl={project.pptUrl}
          />
        )
        )}
      </div>
    </div>
    </section>
  )
}
export default Projects;