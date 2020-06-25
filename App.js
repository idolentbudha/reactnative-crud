import React,{Component} from 'react';
import Router from './src/navigation/Router';
import {AuthContext} from './src/context/Context';

class App extends Component {
  
  setToken = token => {
    this.setState({ token });
  };

  state = {
    token: "",
    setToken: this.setToken
  };

  render(){
    return (
      <AuthContext.Provider value={this.state} >
        <Router/>
      </AuthContext.Provider>
      );
  }
}

export default App;

