import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { deliveryzonesAdd } from "./deliveryzones-add";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    deliveryzonesAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(deliveryzonesAdd)
  ],
  exports: [
    deliveryzonesAdd
  ]
})

export class deliveryzonesAddModule {
}