import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { orderDetailsNew } from "./order-details-new";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    orderDetailsNew
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(orderDetailsNew)
  ],
  exports: [
    orderDetailsNew
  ]
})

export class orderDetailsNewModule {
}