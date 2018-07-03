import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
 import { orderList } from "./order-list";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    orderList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(orderList)
  ],
  exports: [
    orderList
  ]
})

export class orderListModule {
}