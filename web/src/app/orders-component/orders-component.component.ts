import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders-component',
  templateUrl: './orders-component.component.html',
  styleUrls: ['./orders-component.component.scss']
})
export class OrdersComponentComponent implements OnInit {


  orders$: Observable<Order[]>;

  selectedOrder?: Order;
  constructor(
    private ordersService:OrdersService
  ) {
    this.orders$ = this.ordersService.loadAllOrders()
  }

  ngOnInit(): void {
    
  }

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

}
