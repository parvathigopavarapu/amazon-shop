import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular'
import { orderHistory } from "./order-history";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    orderHistory
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(orderHistory)
  ],
  exports: [
    orderHistory
  ]
})

export class orderHistoryModal {
}