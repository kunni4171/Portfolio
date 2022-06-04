import React from 'react'
import './Achievement.css'
import Card from "../Card/Card";
import codingimg from "../../img/codingimg.png";
import projectimg from "../../img/projectimg.png";

import Resume from './resume.pdf';

const Achievement = () => {
    return (
        <div className='achievements'>

            <div className="left-text">
                <span>My Achievements </span>
                <span> And My Skills</span>
                <span>
                    Solved over 500+ problems on Online judges such as Leetcode, Codeforces,Codechef.
                    <br />                    <br />

                    Achieved Highest Rating of 943 on Codeforces.
                    <br />                    <br />

                    Shortlisted for the final rounds of the various Coding events such as TechMaiden,<br />
                    Pentathalon and Codesparks.

                    <br />                    <br />
                    Got selected for Hack 36 2021(Annual Hackathon Event of CC MNNIT, ALLAHABAD)
                    <br /><br />
                    Developed a fully functional Blog website during Dev Jam(organised by CC MNNIT, ALLAHABAD)
                    <br />
                    <a href='https://github.com/kunni4171/Euphoria'  >Euphoria</a>


                </span>
                <span className= 'skillsset'>Skills Acquired</span>
                <br/>
                <span >Data Structure and Algorithms</span>
                <br/>

                <span>Web Development</span>
                <br/>

                <span>Problem Solving</span>
                <br/>

                <span>Github</span>
                <br/>

                <span>Familiar With Stack Overflow</span>
                <br/>



                <a href={Resume} download>
                    <button className="button s-button">Download CV</button></a>

                {/* <a href={Resume} download>
                </a> */}
            </div>
            <div className='cardbox'>
                <div className="cards">

                    <Card
                        emoji={projectimg}

                        heading={"Communication"}
                        detail={" Conflict management "}
                        detail2={"Teamwork skills"}
                        detail3={"Adaptability"}
                        detail4={"Leadership"}


                    />

                </div>
            </div>
            <div className='cardbox2'>

                <div className="cards">

                    <Card
                        emoji={codingimg}

                        heading={"Coding Profiles"}
                        detail={<a href='https://codeforces.com/profile/kunni4171'>Codeforces</a>}
                        detail2={<a href='https://leetcode.com/problemset/all/'>Leetcode</a>}
                        detail3={<a href='https://www.codechef.com/users/kunni4171'>Codechef</a>

                        }

                    />



                </div>



            </div>

        </div>
    )
}

export default Achievement