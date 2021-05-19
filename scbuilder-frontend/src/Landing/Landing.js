import React from 'react';

function Landing() {

  return (
    <div class="box is-secondary">
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            Smart Contract Builder
          </p>
          <p class="subtitle">
            "Code-free" smart contract deployment
          </p>
        </div>
      </section>
      <section class="section">
        <h1 class="title">What is a Smart Contract?</h1>
        <h3>
        A smart contract is an autonomous program or a transaction protocol which is intended to automatically execute, 
        control or document relevant events and actions according to the terms of a contract or an agreement.<br/>
        It removes the need for a intermediary, allowing two parties to enter into an agreement, and should the terms of the agreement be met, the contract will execute 
        </h3>
        <br/>
        <h3>
        The aim of the Smart contract builder is to allow for a user to deploy a contract without needing any prior coding knowledge.<br/>
        Simply select the type of contract you wish to deploy, pay the fee, and the contract will be deployed on your behalf.
        </h3>
      </section>
    </div>
  )

}

export default Landing;
