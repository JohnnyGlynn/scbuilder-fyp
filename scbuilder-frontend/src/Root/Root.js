import React, {Component} from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import './Root.css';

import Landing from "../Landing/Landing"
import Header from "../Header/Header"
import Generator from "../Generator/Generator"

class Root extends Component{
  constructor(props){
      super(props);
      this.state={
          value_key:""
      }
  }

  parentFunction=(data_from_child)=>{
      this.setState({value_key:data_from_child});
  }
  
  render(){
      return(
        <BrowserRouter>
          <Header />
          <div className="container" style={{height: 1000, paddingTop: 200}}>
            <Switch>
              <Route exact path="/">
                <Landing />
              </Route>
              <Route path="/generator">
                <Generator />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      );
  }
}
export default Root;