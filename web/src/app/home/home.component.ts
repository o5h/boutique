import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { OrdersStore } from '../services/orders.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  orders$?: Observable<Order[]>;

  constructor(
    private ordersStore: OrdersStore,
  ) {
    this.orders$ = ordersStore.orders$;
  }

  ngOnInit(): void { 
    
  }

  loadAll(): void {
    this.orders$ = this.ordersStore.orders$;
  }

}
