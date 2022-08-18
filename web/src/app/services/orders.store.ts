import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, shareReplay, tap, throwError } from "rxjs";
import { LoadingService } from "../loading/loading.service";
import { MessagesService } from "../messages/messages.service";
import { Order } from "../model/order";
import { OrdersService } from "./orders.service";

@Injectable({ providedIn: 'root' })
export class OrdersStore {
    private subject = new BehaviorSubject<Order[]>([]);
    orders$ = this.subject.asObservable();

    constructor(
        private ordersService: OrdersService,
        private loadingService: LoadingService,
        private messagesService: MessagesService) {
        this.loadAll();
    }


    filter(status: string): Observable<Order[]> {
        return this.orders$.pipe(
            map(orders => orders.filter(order => order.status == status))
        )
    }


    updateOrder(id: number, changes: Partial<Order>): Observable<any> {
        const orders = this.subject.getValue();
        const index = orders.findIndex(order => order.id === id);
        const updatedOrder: Order = {
            ...orders[index],
            ...changes
        };
        const newOrders = orders.slice(0);
        newOrders[index] = updatedOrder;
        this.subject.next(newOrders);

        return this.ordersService.updateOrder(id, updatedOrder).pipe(
            catchError(err => {
                const msg = "Can't save order";
                this.messagesService.showMessages(msg);
                console.log(msg, err);
                return throwError(() => err)
            }),
            shareReplay()
        )
    }


    private loadAll(): void {
        const loadAll$ = this.ordersService.loadAll()
            .pipe(
                catchError(err => {
                    const msg = "can't load orders";
                    this.messagesService.showMessages(msg);
                    console.log(msg, err);
                    return throwError(() => err);
                }),
                tap(orders => { this.subject.next(orders) })
            );
        this.loadingService.loadingOnUntilCompleted(loadAll$).subscribe();
    }

}