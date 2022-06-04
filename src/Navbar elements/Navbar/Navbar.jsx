import React from 'react'
import './Navbar.css'
import Vector3 from "../../img/Vector3.png";

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">My Achievments</div>
                <div className="n-code">Coding Profiles</div>

            </div>
            <div className="n-right">
                <a href='mailto:kunikaj4171@gmail.com'>     <button className="button n-button">Contact Me</button></a>
                <img className='nav-img' src={Vector3} width={150} height={150} alt="" />
            </div>
        </div>
    )
}

export default Navbar