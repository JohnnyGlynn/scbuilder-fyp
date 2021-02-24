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

	client, err := ethclient.Dial("https://ropsten.infura.io")
	if err != nil {
		log.Fatal(err)
	}

	privateKey, err := crypto.HexToECDSA(os.Getenv("TESTNET_BACKEND_WALLET_PRIVATE_KEY"))
	if err != nil {
		log.Fatal(err)
	}

	publicKey := privateKey.Public()
	
}