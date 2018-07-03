import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { openinghours } from "./openinghours";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    openinghours
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(openinghours)
  ],
  exports: [
    openinghours
  ]
})

export class openinghoursModule {
}