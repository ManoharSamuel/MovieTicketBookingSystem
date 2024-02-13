import ReactDOM from 'react-dom';
import React from 'react';
import {withRouter} from 'react-router';

class Product extends React.Component{

    constructor(){
        super();
        this.state = {
            item : ""
        }
    }

    componentDidMount(){
        const prod = this.props.match.params.name;
        this.setState(
            {
                item : prod
            }
        )
    }

    change = (path) => {

        this.props.history.push(path);

    }



    render(){
        return(
            <div>
                <center>
                <h3> You have selected {this.state.item}</h3>
                <br/>
                <button onClick = {() => this.change('/Home')}>Go to Home</button>
                </center>

            </div>
        )
    }
}

export default withRouter(Product);