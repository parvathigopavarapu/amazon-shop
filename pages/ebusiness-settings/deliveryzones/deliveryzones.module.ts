import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { deliveryzones } from "./deliveryzones";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    deliveryzones
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(deliveryzones)
  ],
  exports: [
    deliveryzones
  ]
})

export class deliveryzonesModule {
}