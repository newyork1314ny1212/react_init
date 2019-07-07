
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Home from '../Home/Home';

class Main extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){

        return (
            <div>
                <Route exact path="/home" component={Home}/>
              
            </div>
        );
    }
}
export default withRouter(connect(
)(Main));