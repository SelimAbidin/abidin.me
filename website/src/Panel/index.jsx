import React, { Component } from 'react'
import './panel.css'
class Panel extends Component {

    render() {
        const {children} = this.props
        return <div className="panel">{children}</div>
    }
}

export { Panel }