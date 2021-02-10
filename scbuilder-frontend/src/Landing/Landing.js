import React from 'react';
import './Landing.css';
// import {makeStyles, Button, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

// const styles = makeStyles(() => ({
//   menuButton: {
//     fontFamily: "Helvetica",
//     fontWeight: 700,
//     size: "18px",
//     marginLeft: "38px",
//   },
//   formControl: {
//   color: "0000000",
//   margin: "5vh",
//   minWidth: 120,
//   },
// }));

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

  return (
    <body className = "Landing-body">
      <div>
        <div>{contractSelect()}</div>
        {/* <Button variant="contained" color="primary" onClick={generateSmartContract} className={menuButton}>Generate Smart-Contract</Button> */}
      </div>
    </body>
  )

}

export default Landing;
