import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { orderDetails } from "./order-details";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    orderDetails
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(orderDetails)
  ],
  exports: [
    orderDetails
  ]
})
export class orderDetailsModule {
}