import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponentComponent } from './orders-component/orders-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: "", component: OrdersComponentComponent  },
  { path: "**", component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true 
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
