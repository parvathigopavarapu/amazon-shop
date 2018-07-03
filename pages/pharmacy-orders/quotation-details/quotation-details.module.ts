import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { quotationDetails } from "./quotation-details";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    quotationDetails
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(quotationDetails)
  ],
  exports: [
    quotationDetails
  ]
})

export class quotationDetailsModule {
}