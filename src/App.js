import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () =>(
  <div>Home</div>
)
const Main = () =>(
  <div>Main</div>
)
const Dashboard = () =>(
  <div>Dashboard</div>
)
const Profile = () =>(
  <div>Profile</div>
)

const Nav = () =>{
  const item = {
    margin: '0 8px',
    textDecoration: 'none'
  }
  return(
    <nav style={{
        border: '1px solid black',
        padding: 24,
        width: '90%'
      }}>
      <Link style={item} to="/">Home</Link>
      <Link style={item} to="/Main">Main</Link>
      <Link style={item} to="/Dashboard">Dashboard</Link>
      <Link style={item} to="/Profile">Profile</Link>
    </nav>
  );
}

class App extends Component {
  render() {
    return (
      <Router>

        <Nav />

        <Route exact path="/" component={Home} />
        <Route path="/Main" component={Main} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Profile" component={Profile} />
      </Router>
    );
  }
}

export default App;
