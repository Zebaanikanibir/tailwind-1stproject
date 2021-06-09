import React from 'react';
import './App.css';
import Nabvar from './Components/Navbar/Nabvar'
import Hero from './Components/Hero/Hero'
import Home from './Components/Home/Home'
import Content from './Components/Content/Content'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/navbar">
           <Nabvar></Nabvar>
         </Route>
         <Route path="/hero">
         <Hero></Hero>
         </Route>
         <Route path="/content">
           <Content></Content>
         </Route>
         <Route exact path="/">
           <Home></Home>
         </Route>
       </Switch>
       </Router>
    </div>
  );
}

export default App;
