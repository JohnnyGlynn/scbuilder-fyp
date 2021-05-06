import React from 'react';
import Web3 from 'web3';

function Landing() {

  // const {menuButton, formControl} = styles();
  const [contract, setContract] = React.useState('Contract');

  const handleChange = (event) => {
    setContract(event.target.value);
  };

  var contractSelect = () => {
    return(
      <div>
        {/* <FormControl color="secondary" className={formControl}>
        <InputLabel color="secondary" id="contract-select">Contract Type</InputLabel>
        <Select
          labelId="contract-select"
          id="contract-select"
          value={contract}
          onChange={handleChange} 
          color="secondary"
        >
          <MenuItem color="secondary" value={"contract"}>simple contract</MenuItem>
          <MenuItem color="secondary" value={"subcurrency"}>sub-currency</MenuItem>
        </Select>
      </FormControl> */}
      </div>
    );
  };

  function generateSmartContract(){

    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(contract)
    };

    console.log("Request body" + requestOptions.body)

    fetch('http://localhost:10000/scgen', requestOptions)
        .then(response => {
                console.log(response)
        })
        .catch((error) => {
            console.log("Im an error" + error)
        });

    // fetch('http://localhost:10000/scgen',{
    //   method: 'GET'})
    // .then(response => {
    //         console.log(response)
    // })
    // .catch((error) => {
    //     console.log("Im an error" + error)
    // });
  }

  async function send() {
    const ethereum = window.ethereum
    const web3 = new Web3(ethereum);
    // var receiver = "0x541209bd9C60cDb11A5076b785ba1BD44cd15768";  
    // var sender = web3.eth.accounts[0];
    // web3.eth.sendTransaction({to:receiver, from:sender, value:web3.toWei("0.5", "ether")},function (err, res){});

    // web3.eth.sendTransaction({
    //   from: sender,
    //   to: '0xdfA5b6CF765b7Af27642A4c159b37492C40B7f8C',
    //   value: '100000000000000000'
    //   })
    //   .then(function(receipt){
    //       console.log(receipt);
    //   });
    var data = await web3.eth.getAccounts();
    // web3.eth.defaultAccount = accounts[0]

    
        web3.eth.sendTransaction({
            to: '0xdfA5b6CF765b7Af27642A4c159b37492C40B7f8C',
            from: data[0],
            value: web3.utils.toWei('.1', 'ether'), 
        })  

    // web3.eth.getAccounts(function(error, result) {
    //       web3.eth.sendTransaction(
    //           {
    //           from:web3.eth.accounts[0],
    //           to:"0xdfA5b6CF765b7Af27642A4c159b37492C40B7f8C",
    //           value:  "100000000000000000", 
    //           data: "0xdf"
    //           }, 
    //           function(err, transactionHash) {
    //         if (!err)
    //           console.log(transactionHash + " success"); 
    //       });
    //   });
  }

  return (
    // <body>
      // <div>
      //   <div>{contractSelect()}</div>
      //   {/* <Button variant="contained" color="primary" onClick={generateSmartContract} className={menuButton}>Generate Smart-Contract</Button> */}
      // </div>
    // </body>
    <div class="box is-secondary">
      <article class="panel is-primary">
        <p class="panel-heading">
          Primary
        </p>
        <p class="panel-tabs">
          <a class="is-active">All</a>
          <a>Contract</a>
          <a>Sub-currency</a>
        </p>
        <div>
          <div>{contractSelect()}</div>
        {/* <Button variant="contained" color="primary" onClick={generateSmartContract} className={menuButton}>Generate Smart-Contract</Button> */}
      </div>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-primary" type="text" placeholder="Search"/>
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        {/* <button class="button is-secondary" style={{padding: "5px"}} onClick={() => send()}> */}
        <button class="button is-secondary" style={{padding: "5px"}} onClick={generateSmartContract}>
          Send Transaction
        </button>
      </article>
    </div>
  )

}

export default Landing;
