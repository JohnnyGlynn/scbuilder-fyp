package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	inter "scbuilder-backend/internal"
)

//type Contract struct {
//	contract string `json:"contract,omitempty"`
//}

func root(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Root alive and well")
	fmt.Println("Endpoint Hit: /")
}

func scGen(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Authorization")
	fmt.Fprintf(w, "generating smart contract")

	var contract = ""
	log.Printf("%+v", contract)

	err := json.NewDecoder(r.Body).Decode(&contract)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Fprintf(w, "Contract choice: %+v", contract)
	fmt.Printf( "Contract choice: %+v \n", contract)

	switch (contract){
	case "Contract":
		//inter.ContractGenerate()
		inter.Contract()
	case "subcurrency":
		inter.Subcurrency()
	}
}

func handleRequests() {
	fmt.Println("Listening on port 10000" )
	http.HandleFunc("/", root)
	http.HandleFunc("/scgen", scGen)
	log.Fatal(http.ListenAndServe(":10000", nil))

	mux := http.NewServeMux()
	mux.HandleFunc("/", root)
	mux.HandleFunc("/scgen", scGen)

	err := http.ListenAndServe(":10000", mux)
	log.Fatal(err)
	//inter.ContractGenerate()

}
