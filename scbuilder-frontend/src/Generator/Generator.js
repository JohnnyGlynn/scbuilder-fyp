import React from 'react';
import Web3 from 'web3';
import './Generator.css';
import ClipLoader from "react-spinners/ClipLoader";
import { TiTick } from 'react-icons/ti';

function Generator() {
  //react states for various components to be rendered
  const [contract, setContract] = React.useState('Contract');
  const [processing, setProcessing] = React.useState(false);
  const [processed, setProcessed] = React.useState(false);
  const [tx, setTx] = React.useState()
  let [loading, setLoading] = React.useState(true);

  function generateSmartContract(){
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(contract)
    };

    console.log("Request body:" + requestOptions.body)

    fetch('http://localhost:10000/scgen', requestOptions)
        .then(res => res.json())
        .then(data => {
          setProcessed(true);
          setProcessing(false);
          setTx("https://ropsten.etherscan.io/tx/"+data);
        })
        .catch((error) => {
            console.log("Im an error" + error)
        });
  }

  async function send() {
    //connect to metamask web3
    const ethereum = window.ethereum
    const web3 = new Web3(ethereum);
    //get account
    var data = await web3.eth.getAccounts();
    //send transaction
    web3.eth.sendTransaction({
        to: '0xdfA5b6CF765b7Af27642A4c159b37492C40B7f8C',
        from: data[0],
        value: web3.utils.toWei('.1', 'ether'), 
    }, function(error, result){
      if (error == null){
        //if transaction is paid, loading icon, contract generator
          setProcessing(true)
          generateSmartContract();
      }else{
        if(error.message.includes("User denied transaction")){
          //remove loading icon
          setProcessing(false)
          console.log("User rejected transaction");
        }
      }
      
    })
  }

  return (
    <div class="box">
      <article class="panel is-primary">
        <p class="panel-heading">
          Smart Contract Generator
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <p>Please select the variant of contract you want to deploy</p>
          <div class="select" >
          <select value={contract} onChange={(e) =>setContract(e.currentTarget.value)}>
            <option value="Contract">Contract</option>
            <option value="Subcurrency">Subcurrency</option>
          </select>
        </div>
          </p>
        </div>
        <button class="button is-secondary" style={{padding: "5px"}} onClick={send}>
          Send Transaction
        </button>
        {processing === true &&
        <div style={{paddingTop: "20px"}}>
          <ClipLoader color={"green"} loading={loading} size={100} />
          <br/>
          <span>Please wait while youre transaction is processed</span>
        </div>
        }
        {processed === true &&
          <div style={{paddingTop: "20px"}}>
            <TiTick color={"green"} loading={loading} size={100} />
            <br/>
            <span>Contract Deployed: <a href={tx}>Etherscan</a></span>
          </div>
        }
      </article>
    </div>
  )

}

export default Generator;
