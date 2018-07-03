import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { orderDetailsModal } from "./order-details-modal";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    orderDetailsModal
  ],
  imports: [
      ComponentsModule,
    IonicPageModule.forChild(orderDetailsModal)
  ],
  exports: [
    orderDetailsModal
  ]
})

export class orderDetailsModalModule {
}
