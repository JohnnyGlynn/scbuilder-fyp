package internal

import (
	"io/ioutil"
)

func ContractGenerate() {
	d1 := []byte("pragma solidity ^0.4.0;" +
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
	err := ioutil.WriteFile("/tmp/contract.sol", d1, 0644)
	check(err)
}

