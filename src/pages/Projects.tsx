import Header from "../components/Header";
import ProjectItem from "../components/ProjectItem";
import React from "react";

const Projects: React.FC = () => {
    return (
        <>
            <Header />
            <h1>Projects</h1>
            <div className="projects-grid">
                <ProjectItem
                    label="Topics in Undergraduate Mathematics"
                    description="A collection of mathematics notes taken during my undergraduate years. I envision it to grow in length over the years."
                    to="/projects/undergrad-maths.pdf"
                    image="/images/undergrad-maths.png"
                />

                <ProjectItem
                    label="Mathematics Olympiad: A Guidebook"
                    description="(TO DO) This book serves as a collection of topics in mathematics olympiad, which might be useful in preparing for mathematics olympiad competitions."
                    to=""
                    image=""
                />

                <ProjectItem
                    label="Different Sizes of Infinity"
                    description="This is a poster designed for the Mathematics Week at my junior college. The poster covers the cardinality of sets. The intended audience is high school students."
                    to="/projects/infinity.pdf"
                    image=""
                />
            </div>
        </>
    );
};

export default Projects;
