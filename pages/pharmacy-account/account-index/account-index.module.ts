import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular'
import { pharmacyAccountIndex } from "./account-index";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    pharmacyAccountIndex
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(pharmacyAccountIndex)
  ],
  exports: [
    pharmacyAccountIndex
  ]
})

export class pharmacyAccountIndexModule {
}