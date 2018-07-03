import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { pharmacyIndex } from "./pharmacy-index";

@NgModule({
  declarations: [
    pharmacyIndex
  ],
  imports: [
   IonicPageModule.forChild(pharmacyIndex)
  ],
  exports: [
    pharmacyIndex
  ]
})

export class pharmacyIndexModule {
}