import { Component, Input, OnInit } from '@angular/core';
import { EmptyOrder, Order } from '../model/order';
import { OrdersStore } from '../services/orders.store';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponentComponent implements OnInit {

  @Input()
  order: Order = { ...EmptyOrder };

  constructor(
    private ordersStore: OrdersStore,

  ) { }

  ngOnInit(): void { }

  OnSave() {
    this.ordersStore.updateOrder(this.order.id, this.order).subscribe();
  }
}
