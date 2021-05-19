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

func Contract() string {
	//generate file
	ContractGenerate()
	//compile smart contract
	shell := exec.Command("/bin/sh", "contract.sh")
	//cmd := exec.Command("pwd", "pwd" )
	fmt.Println("Compiling & deploying Contract")
	out, err := shell.Output()
	if err != nil {
		fmt.Println("Shell Error")
		fmt.Println(err.Error())
		return err.Error()
	}
	fmt.Println("Transaction Hash: " + string(out))
	return string(out)
}

func Subcurrency() string{
	//generate file
	SubCurrencyGenerate()
	//compile smart contract
	shell := exec.Command("/bin/sh", "subcurrency.sh")
	//cmd := exec.Command("pwd", "pwd" )
	fmt.Println("Compiling & deploying Subcurrency")
	out, err := shell.Output()
	if err != nil {
		fmt.Println("Shell Error")
		fmt.Println(err.Error())
		return err.Error()
	}
	fmt.Println("Transaction Hash: " + string(out))
	return string(out)
}