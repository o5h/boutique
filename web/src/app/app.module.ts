import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponentComponent } from './orders-component/orders-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { WelcomePageComponentComponent } from './welcome-page-component/welcome-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    WelcomePageComponentComponent,
    OrdersComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
