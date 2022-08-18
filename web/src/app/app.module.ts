import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { OrderComponentComponent } from './order/order.component';
import { OrdersComponentComponent } from './orders/orders.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { WelcomePageComponentComponent } from './welcome-page-component/welcome-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    WelcomePageComponentComponent,
    OrdersComponentComponent,
    OrderComponentComponent,
    HomeComponent,
    LoadingComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoadingService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
