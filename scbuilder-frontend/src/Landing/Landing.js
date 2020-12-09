import React from 'react';
import './Landing.css';
import {makeStyles, Button } from "@material-ui/core";

const styles = makeStyles(() => ({
  menuButton: {
    fontFamily: "Helvetica",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
 },
}));

function Landing() {

  const {menuButton} = styles();

  function generateSmartContract(){
    fetch('http://localhost:10000/scgen',{
      method: 'GET'})
    .then(response => {
            console.log(response)
    })
    .catch((error) => {
        console.log("Im an error" + error)
    });
  }

  return (
    <body className = "Landing-body">
      <div>
        <Button variant="contained" color="primary" onClick={generateSmartContract} className={menuButton}>Generate Smart-Contract</Button>
      </div>
    </body>
  )

}

export default Landing;
