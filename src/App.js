import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        
        data: []
         
        }
    }

  componentWillMount() {

    fetch('http://api.population.io:80/1.0/population/1980/Brazil/18/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({data:responseJson});
      })
      .catch((error) => {
        console.error(error);
      });

  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

          <BarChart width={730} height={250} data={this.state.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="females" fill="#8884d8" />
            <Bar dataKey="males" fill="#82ca9d" />
          </BarChart>


        </p>
      </div>
    );
  }
}

export default App;
