package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

type Order struct {
	ID          uint64 `json:"id"`
	Status      string `json:"status"`
	Description string `json:"description"`
	Created     uint64 `json:"created"`
}

var Orders = []Order{
	{ID: 1, Status: "created", Description: " qsdaaf asdfasdf asdfdescription 1", Created: 0},
	{ID: 2, Status: "canceled", Description: "as dfasdf asdfdescription 2", Created: 0},
	{ID: 3, Status: "closed", Description: " asdfasdf asdfdescription asd asd asdasd asd asd asdasdasd asd3", Created: 0},
}

type Response struct {
	Payload interface{} `json:"payload"`
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/orders", func(w http.ResponseWriter, r *http.Request) {
		time.Sleep(3 * time.Second)
		res := Response{Payload: Orders}
		payload, err := json.Marshal(res)
		if err != nil {
			log.Println(err)
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(payload)
	})

	http.ListenAndServe("127.0.0.1:9000", r)
}
