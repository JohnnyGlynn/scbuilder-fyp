package internal

import (
	"io/ioutil"
)
//adapted from https://docs.soliditylang.org/en/v0.4.24/introduction-to-smart-contracts.html
func SubCurrencyGenerate() {
	d1 := []byte("pragma solidity ^0.5.0;" +
		"\n\ncontract Coin {" +
		"\n    // The keyword \"public\" makes those variables" +
		"\n    // readable from outside." +
		"\n    address public minter;" +
		"\n    mapping (address => uint) public balances;" +
		"\n\n    // Events allow light clients to react on" +
		"\n    // changes efficiently." +
		"\n    event Sent(address from, address to, uint amount);" +
		"\n\n    // This is the constructor whose code is" +
		"\n    // run only when the contract is created." +
		"\n    constructor (bytes32 Coin) public {" +
		"\n        minter = msg.sender;" +
		"\n    }" +
		"\n\n    function mint(address receiver, uint amount) public {" +
		"\n        if (msg.sender != minter) return;" +
		"\n        balances[receiver] += amount;" +
		"\n    }" +
		"\n\n    function send(address receiver, uint amount) public {" +
		"\n        if (balances[msg.sender] < amount) return;" +
		"\n        balances[msg.sender] -= amount;" +
		"\n        balances[receiver] += amount;" +
		"\n        emit Sent(msg.sender, receiver, amount);" +
		"\n    }" +
		"\n}")
	err := ioutil.WriteFile("/tmp/contracts/contracts/subcurrency.sol", d1, 0644)
	check(err)
}
