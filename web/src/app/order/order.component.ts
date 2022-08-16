import { Component, Input, OnInit } from '@angular/core';
import { EmptyOrder, Order } from '../model/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponentComponent implements OnInit {

  @Input()
  order: Order = { ...EmptyOrder };

  constructor() { }

  ngOnInit(): void { }

}
