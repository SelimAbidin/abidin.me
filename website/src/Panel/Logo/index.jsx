import React, { Component } from 'react'
import './logo.css'

class Logo extends Component {

    // constructor (props) {
    //     super(props)
    // }

    render() {
        return <header className="logo-content">
            <h1 className="logo-header"><span className="name">Y. Selim</span> ABİDİN</h1>
            <span className="subheader">Full Stack Software Develper</span>
        </header>
    }

}

export { Logo }