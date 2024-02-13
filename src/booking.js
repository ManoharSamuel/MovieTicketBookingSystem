import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';

class Booking extends React.Component{
    constructor(){
        super();
        this.state = {
            id : "",
            time : "",
            date : "",
            number: "",
            items:[]
        }
    }

    componentDidMount(){

        const nm = this.props.match.params.name;
          this.setState(
            {
                id : nm
            }
        )
        if(nm == 1){
        axios.get('http://localhost:4000/movies/1').then((resp) => {
          this.setState(
              {
                  items : resp.data
              }
            )
          }).catch((err) => console.log(err));
        }

        else if(nm == 2){
            axios.get('http://localhost:4000/movies/2').then((resp) => {
              this.setState(
                  {
                      items : resp.data
                  }
                )
              }).catch((err) => console.log(err));
            }

       else if(nm ==3){
        axios.get('http://localhost:4000/movies/3').then((resp) => {
          this.setState(
              {
                  items : resp.data
              }
            )
          }).catch((err) => console.log(err));
        }

        else if(nm == 4){
        axios.get('http://localhost:4000/movies/4').then((resp) => {
          this.setState(
              {
                  items : resp.data
              }
            )
          }).catch((err) => console.log(err));
        }

        else if(nm == 5){
        axios.get('http://localhost:4000/movies/5').then((resp) => {
          this.setState(
              {
                  items : resp.data
              }
            )
          }).catch((err) => console.log(err));
        }

        else if(nm == 6){
        axios.get('http://localhost:4000/movies/6').then((resp) => {
          this.setState(
              {
                  items : resp.data
              }
            )
          }).catch((err) => console.log(err));
        }

        else if(nm == 7){
        axios.get('http://localhost:4000/movies/7').then((resp) => {
          this.setState(
              {
                  items : resp.data
              }
            )
          }).catch((err) => console.log(err));
        }

        else if(nm == 8){
        axios.get('http://localhost:4000/movies/8').then((resp) => {
          this.setState(
              {
                  items : resp.data
              }
            )
          }).catch((err) => console.log(err));
        }
      }

    time = (tm) => {
        this.setState(
            {
                time : tm
            }
        )
    }

    date = (dt) => {
        this.setState(
            {
                date : dt
            }
        )
    }

    number = (nm) => {
        this.setState(
            {
                number : nm
            }
        )
    }

    move = () => {

        this.props.history.push(`/ticketConf?Date=${this.state.date}&Time=${this.state.time}&Number=${this.state.number}`);

    }

    change = (path) => {

      this.props.history.push(path);

  }
   
  
    render(){

        const {items, id} = this.state;
        if(id ==1){
            items.title = items.title1;
            items.date = items.date1;
            items.duration = items.duration1;
            items.ratings = items.ratings1;
        }

        else if(id ==2){
            items.title = items.title2;
            items.date = items.date2;
            items.duration = items.duration2;
            items.ratings = items.ratings2;
        }

        else if(id ==3){
            items.title = items.title3;
            items.date = items.date3;
            items.duration = items.duration3;
            items.ratings = items.ratings3;
        }

        else if(id ==4){
            items.title = items.title4;
            items.date = items.date4;
            items.duration = items.duration4;
            items.ratings = items.ratings4;
        }

        else if(id ==5){
            items.title = items.title5;
            items.date = items.date5;
            items.duration = items.duration5;
            items.ratings = items.ratings5;
        }


        return(
            <div >
            <h2><center>Welcome to the {items.title} ticket booking page</center></h2>
            <center>
            <p> Date : </p>
            <input type="radio" name="date" value="19-Oct-2021" onClick = {()=>this.date('19-Oct-2021')}/>
            <label >19-Oct-2021</label>
            <input type="radio" name="date" value="20-Oct-2021" onClick = {()=>this.date('20-Oct-2021')}/>
            <label >20-Oct-2021</label>
            <input type="radio" name="date" value="21-Oct-2021" onClick = {()=>this.date('21-Oct-2021')}/>
            <label >21-Oct-2021</label>
            <input type="radio" name="date" value="22-Oct-2021" onClick = {()=>this.date('22-Oct-2021')}/>
            <label >22-Oct-2021</label>
            <input type="radio" name="date" value="23-Oct-2021" onClick = {()=>this.date('23-Oct-2021')}/>
            <label >23-Oct-2021</label>
            <p> Available Show timings :</p> 
            <input type="radio" name="time" value="9 AM" onClick = {()=>this.time('9 AM')}/>
            <label >9 AM</label>
            <input type="radio" name="time" value="12 PM" onClick = {()=>this.time('12 PM')}/>
            <label >12 PM</label>
            <input type="radio" name="time" value="3 PM" onClick = {()=>this.time('3 PM')}/>
            <label >3 PM</label>
            <input type="radio" name="time" value="6 PM" onClick = {()=>this.time('6 PM')}/>
            <label >6 PM</label>
            <input type="radio" name="time" value="9 PM" onClick = {()=>this.time('9 PM')}/>
            <label >9 PM</label>
            <p> Choose number of seats</p>
            <input type="radio" name="number" value="1" onClick = {()=>this.number('1')}/>
            <label >1</label>
            <input type="radio" name="number" value="2" onClick = {()=>this.number('2')}/>
            <label >2</label>
            <input type="radio" name="number" value="3" onClick = {()=>this.number('3')}/>
            <label >3</label>
            <input type="radio" name="number" value="4" onClick = {()=>this.number('4')}/>
            <label >4</label>
            <input type="radio" name="number" value="5" onClick = {()=>this.number('5')}/>
            <label >5</label>
            <p><i>(Due to high demand a single user can only book upto 5 tickets at a time) </i></p>
            <p><button onClick = {()=> this.move()}>Book Now</button></p>
            </center>
            <br/><br/>

            <div>
                <center><button onClick = {()=> this.change('/Home')}>Go Home</button></center>
            </div>

            </div>
            
        )
    }
}

export default withRouter(Booking);