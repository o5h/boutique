import { Component, Input, OnInit } from '@angular/core';
import { EmptyOrder, Order } from '../model/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponentComponent implements OnInit {

  @Input()
  orders: Order[] | null = [];
  selectedOrder?: Order;

  constructor() { }

  ngOnInit(): void { }

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

  onCreate(): void {this.selectedOrder = {...EmptyOrder}}
  
  getClass(order: Order): string { return this.selectedOrder === order ? "" : order.status }
}
