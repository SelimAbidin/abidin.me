import React from 'react'
import { Logo } from './Panel/Logo'
import { Panel } from './Panel'
import { Menu } from './Panel/Menu'
import { About } from './Content/About/'
import { Works } from './Content/Works/'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
    return <Router>
            <Panel>
                <Logo></Logo>
                <Menu></Menu>
            </Panel>
            <Switch>
                <Route path="/About">
                    <About></About>
                </Route>
                <Route path="/Works">
                    <Works></Works>
                </Route>
            </Switch>
        </Router>
}

export { App }
