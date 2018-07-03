import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { pharmacyBusinessIndex } from "./business-index";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    pharmacyBusinessIndex
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(pharmacyBusinessIndex)
  ],
  exports: [
    pharmacyBusinessIndex
  ]
})

export class pharmacyBusinessIndexModule {
}