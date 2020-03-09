import React, { Component } from 'react'
import { Mock } from './Mock'
import { Worknail } from './Worknail'
import { HOST } from '../../env'
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
        fetch(HOST + '/rest/v1/works', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(e => e.json())
        .then(result => {

            if (result && result.success) {
                this.setState({
                    content: result.works
                })
            }

        } )
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
                               return <Worknail key={el.id} title={el.title} description={el.description}></Worknail>
                            }
                        })
                    }
                </ul>
            </section>
        </div>
    }

}

export { Works }