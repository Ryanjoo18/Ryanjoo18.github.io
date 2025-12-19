import Header from "../components/Header";
import { Link } from "react-router-dom";
import React from "react";
import Typewriter from "typewriter-effect";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <h1>About Me</h1>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome to my website!")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Built with React + TypeScript.")
                        .start();
                }}
            />
            <p>
                {
                    "I am a first-year undergraduate student at the National University of Singapore (NUS), studying Mathematics and Computer Science."
                }
            </p>

            <p>
                {"You can view some of my "}
                <Link to="/projects">{"projects"}</Link>
                {", or refer to some of my "}
                <Link to="/notes">{"notes"}</Link>
                {" that I have taken at school."}
            </p>
        </>
    );
};

export default Home;
