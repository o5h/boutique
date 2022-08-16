import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../loading/loading.service';
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
    private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.reloadOrders()
  }

  reloadOrders(): void {
    this.orders$ = this.loadingService.loadingOnUntilCompleted(
      this.ordersService.loadAllOrders()
    );
  }

}
