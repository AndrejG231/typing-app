import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Practice, Menu } from './components';


const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/play/" >
                    <Practice />
                </Route>
                <Route exact path="/">
                    <Menu />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;