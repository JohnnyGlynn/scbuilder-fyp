import React, {useState} from 'react';
import Web3 from 'web3';

export default function Header() {
  const [account, setAccount] = useState("Metamask not connected!");
  const ethereum = window.ethereum

  if(ethereum !== 'undefined'){
    console.log("Metamask is installed")
  }

  async function metamask(e){
    if (ethereum) {
      const web3 = new Web3(ethereum);
      const currentAccount = await ethereum.enable()

      var data = await web3.eth.getAccounts();
      setAccount(data);
      console.log(account)
    }
  }

  return (
  <div>
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="/scbuilderbig.png" alt="Scbuilder logo" width="112" height="28"/>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">
                Home
              </a>

              <a class="navbar-item">
                Generator
              </a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                <div ><h1 style={{paddingRight: "5px"}}> Wallet Address: {account}</h1></div>
                <button class="button" color="secondary" onClick={metamask}>Connect Web3 Wallet</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
  </div>
  );
};
