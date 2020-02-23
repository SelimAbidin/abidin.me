import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './menu.css'

class Menu extends Component {
    
    render() {
        return <div className="menu">
                <ul>
                    <li><Link to="/About" >About</Link></li>
                    <li><Link to="/Works" >Works</Link></li>
                    <li><Link to="/Resume" >Resumé</Link></li>
                    <li><Link to="/Contact" >Contact</Link></li>
                </ul>
            </div>
    }
}

export { Menu }