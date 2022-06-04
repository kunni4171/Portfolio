import React from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
// import Instagram from "../../img/instagram.png";
// import Gmail from "../../img/gmail.png";
// import Skype from "../../img/skype.png";
// import Vector3 from "../../img/Vector3.png";

// import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span> Hey! Myself </span>
                    <span>Kunika Jain </span>
                    <span>I'm a front end developer and a problem solver I've been working on my minor projects now looking forward to enhance my skills and knowledge by working in challenging work environment !! </span>
                </div>
                <a href='mailto:kunikaj4171@gmail.com'> <button className='button i-button'>Hire Me!!</button></a>
                {/* social icons */}

            </div>
            <div className="i-right">

                {/* <img src={Vector3} alt="" />
                <img src={Vector2} alt="" /> */}

            </div>

            <div className='i-box' >
                <div className="i-image">
                    <img src={boy} width={480} height={350} alt="" />
                </div>
                <div className="i-icons">
                    <a href='https://github.com/'><img src={Github} alt="" /></a>

                    <a href='https://www.linkedin.com/in/kunika-jain-5b567a20a'><img src={LinkedIn} alt="" /></a>
                    {/* <a href='https://www.instagram.com/?hl=en'><img src={Instagram} alt="" /></a> */}
                    {/* <a href='mailto:kunikaj4171@gmail.com'><img src={Gmail} alt="" /></a>
                    <a href='https://join.skype.com/invite/uwZ0LmDlkklV'><img src={Skype} alt="" /></a> */}
                    {/* 
                    <img src={Vector2} width={250} height={250} alt="" />
                    <img src={Vector3} width={450} height={550} alt="" /> */}
                </div>
            </div>

        </div>

    )
}

export default Intro