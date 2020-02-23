import React, { Component } from 'react'
import './about.css'
class About extends Component {
    render () {
        return ( 
        <section className="about">
            <p>Hello, I am Yavuz Selim Abidin.<br/>
            I am a fullstack software developer and working as a lead at Ankageo in Turkey.<br/>
            I am currently interested in WebAssembly, Rust and Go programming languages.</p>
        </section>)
    }
}

export { About }