import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './components/user/user-container/user-container.component';
import { OrderContainerComponent } from './components/order/order-container/order-container.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserSingleComponent } from './components/user/user-single/user-single.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderSingleComponent } from './components/order/order-single/order-single.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
