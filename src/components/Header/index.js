import { Component } from "react"

import {RiArrowDropDownLine} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import './index.css'

class Header extends Component{
   
    render(){

        return(
            <>
              <navbar className="main-container-header">
                <div className="first-container">
                    <img className="logo" src="https://classroom.edyoda.com/static/media/edyoda_transparent_logo.55bcc00f.png" alt="logo"/>
                    <ul>
                        <li>Courses <RiArrowDropDownLine className="react-icons" /> </li>
                        <li>Progress <RiArrowDropDownLine className="react-icons" /> </li>
                    </ul>
                </div>
                <div className="second-container">
                    <ul className="nav-header">
                        <AiOutlineSearch className="react-icon-search"/>
                        <li>Login </li>
                        <li><button className="btn">Join Now</button></li>
                    </ul>
                </div>
              </navbar>
            </>
        )
    }
}

export default Header

