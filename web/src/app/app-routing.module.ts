import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "**", component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
