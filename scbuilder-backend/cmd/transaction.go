package main

import (
	"context"
	"crypto/ecdsa"
	"fmt"
	"log"
	"math/big"
	"os"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
)

func test_transaction(){

	/* Define a transaction
	* Create client for Ropsten Testnet
	* Get private key, and generate public key from that
	* Initialte transaction FROM public address
	* Define Value and Gas price, use suggested
	* Define Target address for Tx
	* Send Tx, return the transaction hash to allow users to look at transaction
	*/

	testnet_url, ok := os.LookupEnv("INFURA_ROPSTEN_EP1")
	if !ok {
		fmt.Println("INFURA_ROPSTEN_EP1 is not present")
	} else {
		fmt.Printf("INFURA_ROPSTEN_EP1: %s\n", testnet_url)
	}


	client, err := ethclient.Dial(testnet_url)//Test net dial with project id
	if err != nil {
		log.Fatal(err)
	}

	//Check for my env variable Private Key
	prKey, ok := os.LookupEnv("TESTNET_BACKEND_WALLET_PRIVATE_KEY")
	if !ok {
		fmt.Println("TESTNET_BACKEND_WALLET_PRIVATE_KEY is not present")
	} else {
		fmt.Printf("TESTNET_BACKEND_WALLET_PRIVATE_KEY: %s\n", prKey)
	}

	privateKey, err := crypto.HexToECDSA(os.Getenv("TESTNET_BACKEND_WALLET_PRIVATE_KEY"))
	//fmt.Print("got private key from: ", os.Getenv("TESTNET_BACKEND_WALLET_PRIVATE_KEY"), "\n")
	if err != nil {
		fmt.Print("unable to get private key", err)
	}

	//fmt.Print(privateKey)

	publicKey := privateKey.Public()//Public of Private
	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
	if !ok {
		log.Fatal("Error signing Public Key ")
	}

	fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)//Grabs public Key from Private key
	nonce, err := client.PendingNonceAt(context.Background(), fromAddress)
	if err != nil {
		log.Fatal(err)
	}

	value := new(big.Int)//Initialise transaction variable
	value.SetString("100000000000000000", 10) // Sets value to 0.1 Eth in Wei
	gasLimit := uint64(21000) //Units of Gas

	gasPrice, err := client.SuggestGasPrice(context.Background())
	if err != nil {
		log.Fatal(err)
	}

	toAddress := common.HexToAddress("0xAF81e9cf9d93018470Ba1Fc999255B5f30C01701")//Test Account public address
	var data []byte

	tx := types.NewTransaction(nonce, toAddress, value, gasLimit, gasPrice, data)

	signedTx, err := types.SignTx(tx, types.HomesteadSigner{}, privateKey)
	if err != nil {
		log.Fatal(err)
	}

	err = client.SendTransaction(context.Background(), signedTx)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("tx sent: %s", signedTx.Hash().Hex())
	
}