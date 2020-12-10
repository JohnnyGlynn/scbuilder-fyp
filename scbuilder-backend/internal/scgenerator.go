package internal

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func contract(){
	ContractGenerate()
}

func subcurrency(){
	SubCurrencyGenerate()
}