import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Home from './Home';
import App from './App';
import Contacts from './Contacts';
import Product from './Product';
import Header from './header';
import Footer from './footer';
import ToDo from './ToDo';
import Details from './Details';
import booking from './booking';
import upComingDetails from './upcomingDetails';
import ticketConf from './ticketConf';
import { Route, BrowserRouter, Link } from 'react-router-dom';

class NewRouter extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/App' component={App}></Route>
                    <Route path='/Contacts'><Contacts /></Route>
                    <Route path='/Home'><Home /></Route>
                    <Route path='/ToDo' component={ToDo}></Route>
                    <Route path='/Details/:name' component={Details}></Route>
                    <Route path='/upComingDetails/:name' component={upComingDetails}></Route>
                    <Route path='/Booking/:name' component={booking}></Route>
                    <Route path='/App/:name' component={Product}></Route>
                    <Route path='/ticketConf' component={ticketConf}></Route>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }

}

export default NewRouter;