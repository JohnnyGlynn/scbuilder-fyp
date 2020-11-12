package internal

import (
	"io/ioutil"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func Generate() {
	d1 := []byte("I'm a smart contract")
	err := ioutil.WriteFile("/tmp/contract1", d1, 0644)
	check(err)
}