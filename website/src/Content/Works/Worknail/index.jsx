import React from 'react'
import './worknail.css'

function Worknail({title}) {
    return <li className="worknail">
            <div className="thumb"></div>
            <div className="project-name">{title}</div>
        </li>
}

export { Worknail }
