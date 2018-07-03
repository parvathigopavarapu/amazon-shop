import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { quotationCreate } from "./quotation-create";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    quotationCreate
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(quotationCreate)
  ],
  exports: [
    quotationCreate
  ]
})

export class quotationCreateModule {
}