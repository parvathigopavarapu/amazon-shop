import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { pharmacyOrderIndex } from "./order-index";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    pharmacyOrderIndex
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(pharmacyOrderIndex)
  ],
  exports: [
    pharmacyOrderIndex
  ]
})

export class pharmacyOrderIndexModule {
}