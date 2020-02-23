import React from 'react'
import { Logo } from './Panel/Logo'
import { Panel } from './Panel'
import { Menu } from './Panel/Menu'
import { About } from './Content/About/'
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
            </Switch>
        </Router>
}

export { App }
