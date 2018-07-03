import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { deliveryzonesEdit } from "./deliveryzones-edit";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    deliveryzonesEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(deliveryzonesEdit)
  ],
  exports: [
    deliveryzonesEdit
  ]
})

export class deliveryzonesEditModule {
}