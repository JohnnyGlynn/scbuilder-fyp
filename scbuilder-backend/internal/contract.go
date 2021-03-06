package internal

import (
	"io/ioutil"
)
//adapted from https://docs.soliditylang.org/en/v0.4.24/introduction-to-smart-contracts.html
func ContractGenerate() {
	d1 := []byte("pragma solidity ^0.5.0;" +
		"\n" +
		"\ncontract SimpleStorage {" +
		"\n    uint storedData;" +
		"\n\n    function set(uint x) public {" +
		"\n        storedData = x;" +
		"\n    }" +
		"\n\n    function get() public view returns (uint) {" +
		"\n        return storedData;" +
		"\n    }" +
		"\n}")
	err := ioutil.WriteFile("/tmp/contracts/contracts/contract.sol", d1, 0644)
	check(err)
}

