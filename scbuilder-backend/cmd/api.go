package main

import (
	"fmt"
	"log"
	"net/http"

	inter "scbuilder-backend/internal"
)

func root(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Root alive and well")
	fmt.Println("Endpoint Hit: /")
}

func scGen(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Fprintf(w, "generating smart contract")
	inter.Generate()
}

func handleRequests() {
	http.HandleFunc("/", root)
	http.HandleFunc("/scgen", scGen)
	log.Fatal(http.ListenAndServe(":10000", nil))
}
