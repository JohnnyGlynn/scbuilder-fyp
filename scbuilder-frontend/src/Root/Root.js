import React, {Component} from 'react';

import './Root.css';

import Landing from "../Landing/Landing"
import Header from "../Header/Header"

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
          <div>      
              {/* <Child1 functionCallFromParent={this.parentFunction.bind(this)}/> */}
              {/* <Child2 valueFromParent={this.state.value_key}/> */}
              <Header/>
              <Landing />
          </div>
      );
  }
}
export default Root;