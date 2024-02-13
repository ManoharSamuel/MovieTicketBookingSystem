import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import queryString from 'query-string';
import 'react-qr-code';
import 'qrcode.react';

class ticketConf extends React.Component{
    constructor(){
        super();
        this.state={
            number:"",
            date:"",
            time:""
        }
    }

    componentDidMount(){
        const qs = queryString.parse(this.props.location.search);
        this.setState(
            {
                number : qs.Number,
                date : qs.Date,
                time:qs.Time
            }
        )
        console.log(`${this.state.number}`);
    }

    change = (path) => {

        this.props.history.push(path);

    }

    

    render(){
        const QRCode = require('qrcode.react');

        return(
            <div>
            <center>
            <h2> Congratulations! You have successfully booked the ticket !</h2>
            <p> Here are your ticket details</p>
            <div class="row">
              <div class="column2">
                <table >
                <tr><td><b><p> Date </p></b></td><td> {this.state.date}</td></tr>
                <tr><td><b><p> Number of Tickets </p></b></td><td> {this.state.number}</td></tr>
                <tr><td><b><p> Time </p></b></td><td> {this.state.time}</td></tr>
                </table>
              </div>
            </div>
            <div>
                <center><button onClick = {()=> this.change('/Home')}>Go Home</button></center>
            </div>
            <div>
                <QRCode
                    id="123456"
                    value={`Here are your ticket details \n Date :${this.state.date} \n Number of Tickets :${this.state.number} \n Time :${this.state.time}`}
                    size={290}
                    level={"H"}
                    includeMargin={true}
                />
                </div>
            </center>
            </div>
        )
    }
}

export default withRouter(ticketConf);