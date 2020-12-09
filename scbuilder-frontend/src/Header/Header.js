import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import './Header.css';
import Web3 from 'web3';

const styles = makeStyles(() => ({
  header: {
    backgroundColor: "#006400",
  },
  logo: {
    fontFamily: "Helvetica",
    fontWeight: 600,
    color: "white",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Helvetica",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
 },
}));

export default function Header() {

  const {header, logo, menuButton} = styles();
  const [account, setAccount] = useState("Metamask not connected!");

  const ethereum = window.ethereum

  if(ethereum !== 'undefined'){
    console.log("Metamask is installed")
  }

  async function metamask(e){
    if (ethereum) {
      const web3 = new Web3(ethereum);

      var data = await web3.eth.getAccounts();
      setAccount(data);

      console.log(account)
    }
  }

  var displayDesktop = () => {
    return(
      <Toolbar>
        {Logo}
        <Button variant="contained" color="secondary" onClick={metamask} className={menuButton}>Enable Ethereum</Button>
        <div className={menuButton}><h1> Wallet Address: {account}</h1></div>
      </Toolbar>
    );
  };

  const Logo = (
    <Typography variant="h6" component="h1" className={logo}>
      SC-Builder
    </Typography>
  );

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
};
