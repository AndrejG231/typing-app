import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Practice, Menu, MainMenu, UndefinedRoute, ResultScreen } from './components';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/play/" >
                    <Practice />
                </Route>
                <Route path="/menu/">
                    <Menu />
                </Route>
                <Route exact path="/">
                    <MainMenu />
                </Route>
                <Route path="/results/">
                    <ResultScreen />
                </Route>
                <Route path="/">
                    <UndefinedRoute />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;