import React from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3-eth';

function App() {

  const winEth = window.ethereum
  const eth = new Web3;


  if(winEth !== 'undefined'){
    console.log("Metamask is installed")
  }

  async function metamask(e){
    if (winEth) {
      window.web3 = new Web3(winEth);
      winEth.enable();
    }
    var accounts = eth.getAccounts();
    console.log(accounts);
  }
  

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={metamask}>Enable Ethereum</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )

}

export default App;
