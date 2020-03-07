import React, { Component } from 'react'
import { Mock } from './Mock'
import './works.css'

class Works extends Component {

    constructor() {
        super()
        this.state = {
            content: Array.from({length: 10}).map(() => ({isMock:true})) 
        }
    }

    componentDidMount() {
       this.fetchData() 
    }

    fetchData() {
        fetch('/rest/v1/deneme')
    }

    
    render() {

        const {content} = this.state

        return <div className="works">
            <nav>
                <ul>
                    <li>Games</li>
                    <li>Web</li>
                    <li>CI/CD</li>
                    <li>WebGL</li>
                </ul>
            </nav>
            <section className="content">
                <ul>
                    {
                        content.map((el, i) => {
                            if (el.isMock) {
                                return <Mock key={i} />
                            } else {
                               return <span>Hata</span>
                            }
                        })
                    }
                </ul>
            </section>
        </div>
    }

}

export { Works }