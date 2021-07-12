import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "./Home";
import Films from "./Films";
import People from "./People";
import Feature from "./Feature";
import Person from "./Person";


class App extends Component {


render() {
    return (
        
    <Router>
        <Fragment>
            <div className='d-flex justify-content-center'>
            <Link className="btn btn-info mr-4 mt-2" to="/">Go Home</Link>
            <Link className="btn btn-info mr-4 mt-2" to="/films">View Films</Link> 
            <Link className="btn btn-info mr-4 mt-2" to="/people">View People</Link> 
            
            </div>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/films" component={Films} /> 
                <Route path="/films/:id" component={Feature} />
                <Route exact path="/people" component={People} />
                <Route path="/people/:id" component={Person} />
            </Switch>
        </Fragment>
    </Router>);


}
};


export default App;