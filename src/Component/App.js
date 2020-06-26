import React from 'react';
import Header from "./Header/Header"
import Test from './Test/Test';
import Banner from './Banner/Banner';
import Result from "./Result/Result"
import {Route,Switch, Redirect} from "react-router-dom"
import About from './About/About';
import Contact from '../Contact/Contact';
function App() {
  return (
    <div> 
 <Header/>

 <Switch>
   <Route  path="/Result" component={Result} />
   <Route exact  path="/Home" component={Banner} />
   <Route exact  path="/" render={()=><Redirect to="Home"/>} />
   <Route  path="/Test" component={Test} />
   <Route  path="/About" component={About} />
   <Route  path="/Contact" component={Contact} />
 </Switch>
    </div>
  );
}

export default App;
