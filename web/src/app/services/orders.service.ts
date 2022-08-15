import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Order } from "../model/order";

@Injectable({ providedIn: 'root' })
export class OrdersService {
    constructor(private http: HttpClient) { }

    loadAllOrders(): Observable<Order[]> {
        return this.http.get<Order[]>('api/orders').pipe(

            map((res: any) => (res["payload"]) as Order[])
            
        );
    }
}