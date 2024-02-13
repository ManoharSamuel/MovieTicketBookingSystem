import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';

import {withRouter} from 'react-router';
import axios from 'axios';

class upComingDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            id : "",
            items: []
        }
    }

    componentDidMount(){
        const im = this.props.match.params.name;
        
        this.setState(
            {
                id : im
            }
        )

         if(im == 6){
            axios.get('http://localhost:4000/movies/6').then((resp) => {
              this.setState(
                  {
                      items : resp.data
                  }
                )
              }).catch((err) => console.log(err));
            }
    
        else if(im == 7){
            axios.get('http://localhost:4000/movies/7').then((resp) => {
              this.setState(
                  {
                      items : resp.data
                  }
                )
              }).catch((err) => console.log(err));
            }
    
            else if(im == 8){
            axios.get('http://localhost:4000/movies/8').then((resp) => {
              this.setState(
                  {
                      items : resp.data
                  }
                )
              }).catch((err) => console.log(err));
            }
          }
    

    change = (path) => {

        this.props.history.push(path);

    }

  
  
    render(){

        const {items, id} = this.state;
        if(id ==6){
            items.image = "https://mk0movieguide99l7786.kinstacdn.com/wp-content/uploads/2012/08/harry_potter_and_the_half_blood_prince_ver22.jpg";
            items.title = items.title6;
            items.date = items.date6;
            items.duration = items.duration6;
            items.ratings = items.ratings6;
        }

        else if(id ==7){
            items.image = "https://images-na.ssl-images-amazon.com/images/I/91oZqUjhv8L._RI_.jpg";
            items.title = items.title7;
            items.date = items.date7;
            items.duration = items.duration7;
            items.ratings = items.ratings7;
        }

        else if(id ==8){
            items.image = "https://cdn11.bigcommerce.com/s-twbzkv97cv/images/stencil/1280x1280/products/3983/6478/HarryPotterAndTheDeathlyHallowsPart2__55018.1578185960.jpg?c=2";
            items.title = items.title8;
            items.date = items.date8;
            items.duration = items.duration8;
            items.ratings = items.ratings8;
        }


        return(
            <div >
            <h2><center>Welcome to the {items.title} details page</center></h2>
            <center>
            <div class="row">
            <div class="column4">
                <img width = "250px" src={items.image}/>
                </div>
              <div class="column4">
                <table >
            <tr><td><b><p> Movie Name </p></b></td><td>{items.title}</td></tr>
            <tr><td><b><p> Release Date </p></b></td><td>{items.date}</td></tr>
            <tr><td><b><p> Duration </p></b></td><td>{items.duration}</td></tr>
            <tr><td><b><p> Ratings </p></b></td><td>{items.ratings}</td></tr>
            </table>
            </div>
            </div>
            </center>
            <br/><br/>
            <div>
                <center><button onClick = {()=> this.change('/Home')}>Go Home</button></center>
            </div>
            <br/><br/>

            </div>
            
        )
    }
}

export default withRouter(upComingDetails);