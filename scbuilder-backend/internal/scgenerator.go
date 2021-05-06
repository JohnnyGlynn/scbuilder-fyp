package internal

import (
	"fmt"
	"os/exec"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func Contract(){
	//init directory
	cmd := exec.Command("mkdir", "/tmp/contracts")
	_, err := cmd.Output()
	if err != nil {
		fmt.Println("error")
		fmt.Println(err)
		return
	}
	//generate file
	ContractGenerate()
	//compile smart contract
	shell := exec.Command("/bin/sh", "truffle.sh")
	//cmd := exec.Command("pwd", "pwd" )
	fmt.Println("running shell script")
	out, err := shell.Output()
	if err != nil {
		fmt.Println("error")
		fmt.Println(err)
		return
	}
	fmt.Println(string(out))
	//deploy smart contract to infura

	//transfer ownership
}

func Subcurrency(){
	//generate file
	SubCurrencyGenerate()
	//compile smart contract

	//deploy smart contract to infura

	//transfer ownership
}