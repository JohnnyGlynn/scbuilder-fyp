import React from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import Eth from 'web3-eth';

function App() {

  const ethereum = window.ethereum
  // eth.setProvider(new eth.providers.HttpProvider());


  if(ethereum !== 'undefined'){
    console.log("Metamask is installed")
  }

  async function metamask(e){
    if (ethereum) {
      const web3 = new Web3(ethereum);
      const currentAccount = await ethereum.enable()

      var account = await web3.eth.getAccounts();
      console.log(account)
    }
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
