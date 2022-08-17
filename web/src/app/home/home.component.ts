import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LoadingService } from '../loading/loading.service';
import { MessagesService } from '../messages/messages.service';
import { Order } from '../model/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  orders$?: Observable<Order[]>;

  constructor(
    private ordersService: OrdersService,
    private loadingService: LoadingService,
    private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.reloadOrders()
  }

  reloadOrders(): void {
    this.orders$ = this.loadingService.loadingOnUntilCompleted(
      this.ordersService.loadAllOrders()
        .pipe(
          catchError(err => {
            const msg = "can't load orders";
            this.messagesService.showMessages(msg);
            console.log(msg, err);
            return throwError(() => err);
          })
        )
    );
  }

}
