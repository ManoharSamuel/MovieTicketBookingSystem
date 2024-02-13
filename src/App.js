import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      myname: "",
      myage: ""
    }
  }

  click = (product) => {
    this.props.history.push(`/App/${product}`);

  }

  componentDidMount() {
    const qs = queryString.parse(this.props.location.search)
    console.log(qs);
    //const {name,age} = qs;
    this.setState({
      myname: qs.Name,
      myage: qs.Age
    })
  }

  render() {
    return (
      <div className="App">
        <h2>You are on App Page !</h2>
        <h3> Welcome {this.state.myname} ! </h3>
        <ul>
          <li><a onClick={() => this.click('Legion 5')}>Legion 5</a></li>
          <li><a onClick={() => this.click('Asus TUF A15')}>Asus TUF A15</a></li>
          <li><a onClick={() => this.click('Mac Air M1')}>Mac Air M1</a></li>
          <li><a onClick={() => this.click('HP Pavilion')}>HP Pavilion</a></li>
        </ul>
      </div>
    );
  }
}

export default App;
