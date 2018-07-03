import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { orderDeliveryDirection } from "./order-delivery-direction";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    orderDeliveryDirection
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(orderDeliveryDirection)
  ],
  exports: [
    orderDeliveryDirection
  ]
})
export class orderDeliveryDirectionModule {
}