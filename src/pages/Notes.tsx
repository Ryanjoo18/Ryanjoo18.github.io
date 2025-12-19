import Header from "../components/Header";
import React from "react";

const Notes: React.FC = () => {
    return (
        <>
            <Header />
            <h1>Notes</h1>
            <p>Here are some notes I have taken in school, some of which I have typed up, mostly in LaTeX.</p>

            <div>
                <h2>NUS (2025-)</h2>
                <p>
                    There are several types of notes that I have taken:
                    <ul>
                        <li>
                            <em>Notes</em>: (Somewhat) complete notes, closely following the lecture notes provided.
                        </li>
                        <li>
                            <em>Cheatsheet</em>: An double-sided A4 paper for closed-book exams, if allowed.
                        </li>
                        <li>
                            <em>Summary sheet</em>: A shortened version of notes, if cheatsheets are not allowed in
                            exams.
                        </li>
                        <li>
                            <em>TUM</em>: Chapters in my book TUM (see <a href="/projects">projects</a>)
                        </li>
                    </ul>
                </p>

                <strong>Mathematics</strong>
                <ul>
                    <li>MA1100T Basic Discrete Mathematics (T) | TUM</li>
                    <li>
                        MA2001 Linear Algebra I | <a href="/notes/nus/ma2001_notes.pdf">notes</a>,{" "}
                        <a href="/notes/nus/ma2001_midterms.pdf">midterms cheatsheet</a>,{" "}
                        <a href="/notes/nus/ma2001_finals.pdf">finals cheatsheet</a>
                    </li>
                    <li>
                        MA2002 Calculus | <a href="/notes/nus/ma2002_notes.pdf">notes</a>,{" "}
                        <a href="/notes/nus/ma2002_finals.pdf">summary</a>
                    </li>
                    <li>
                        MA2104 Multivariable Calculus | <a href="">notes</a>
                    </li>
                    <li>MA2108 Mathematical Analysis I | TUM</li>
                </ul>

                <strong>Computer Science</strong>
                <ul>
                    <li>
                        (Exempted) CS1010S Programming Methodology |{" "}
                        <a href="/notes/nus/cs1010s_summary.pdf">summary</a>
                    </li>
                    <li>
                        CS2030S Programming Methodology II |<a href="/notes/nus/cs2030s_notes.pdf">notes</a>,
                        <a href="/notes/nus/cs2030s_midterms.pdf">midterms cheatsheet</a>,
                        <a href="/notes/nus/cs2030s_pe1.pdf">PE1 cheatsheet</a>,
                        <a href="/notes/nus/cs2030s_pe2.pdf">PE2 cheatsheet</a>,
                        <a href="/notes/nus/cs2030s_finals.pdf">finals cheatsheet</a>
                    </li>
                    <li>
                        CS2040S Data Structures and Algorithms | <a href="">notes</a>
                    </li>
                    <li>
                        CS2102 Database Systems | <a href="">notes</a>
                    </li>
                    <li>
                        CS3234 Logic for Proofs and Programs | <a href="">notes</a>
                    </li>
                </ul>

                <strong>RVRC Programme</strong>
                <ul>
                    <li>RVC1001 The Rocky Road to SDGs | no notes</li>
                </ul>

                <strong>CHS Common Curriculum</strong>
                <ul>
                    <li>
                        HSI1000 How Science Works, Why Science Works | <a href="/notes/nus/hsi1000_notes.pdf">notes</a>
                    </li>
                </ul>

                <strong>CFG</strong>
                <ul>
                    <li>CFG1002 Career Catalyst | no notes</li>
                </ul>
            </div>

            <div>
                <h2>Singapore-Cambridge GCE A-Levels (2023-2024)</h2>
                <ul>
                    <li>H1 Project Work | no notes</li>
                    <li>
                        H1 General Paper | <a href="/notes/a-level/h1-general-paper-p1-content.pdf">P1 content</a> |{" "}
                        <a href="/notes/a-level/h1-general-paper-p1-skills.pdf">P1 skills</a> |{" "}
                        <a href="/notes/a-level/h1-general-paper-p2.pdf">P2</a>
                    </li>
                    <li>
                        H2 Physics | <a href="/notes/a-level/h2-physics.pdf">notes</a> |{" "}
                        <a href="/notes/a-level/h2-physics-practical.pdf">{"practical notes"}</a> |{" "}
                        <a href="/notes/a-level/h2-physics-qualitative-qns.pdf">
                            {"compilation of qualitative questions"}
                        </a>
                    </li>
                    <li>
                        H2 Chemistry | <a href="/notes/a-level/h2-chemistry.pdf">notes</a> |{" "}
                        <a href="/notes/a-level/h2-chemistry-practical.pdf">practical notes</a>
                    </li>
                    <li>
                        H2 Mathematics | <a href="/notes/a-level/h2-mathematics.pdf">notes</a>
                    </li>
                    <li>
                        H2 Economics | <a href="files/notes/a-level/h2-economics-micro.pdf">microeconomics</a> |{" "}
                        <a href="files/notes/a-level/h2-economics-macro.pdf">macroeconomics</a> |{" "}
                        <a href="files/notes/a-level/h2-economics-summary.pdf">summary sheet</a>
                    </li>
                    <li>
                        H3 Mathematics | <a href="/notes/a-level/h3-mathematics.pdf">notes</a>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Singapore-Cambridge GCE O-Levels (2021-2022)</h2>
                <ul>
                    <li>
                        English Language | <a href="/notes/o-level/english-language.zip">notes</a>
                    </li>
                    <li>Chinese Language | no notes</li>
                    <li>
                        Higher Chinese Language | <a href="/notes/o-level/higher-chinese-language.zip">notes</a>
                    </li>
                    <li>Mathematics | no notes</li>
                    <li>Additional Mathematics | no notes</li>
                    <li>
                        Physics | <a href="/notes/o-level/physics.zip">notes</a>
                    </li>
                    <li>
                        Chemistry | <a href="/notes/o-level/chemistry.zip">notes</a>
                    </li>
                    <li>
                        Biology | <a href="/notes/o-level/biology.zip">notes</a>
                    </li>
                    <li>
                        Social Studies | <a href="/notes/o-level/social-studies.zip">notes</a>
                    </li>
                    <li>
                        Elective Geography | <a href="/notes/o-level/elective-geography.zip">notes</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Notes;
