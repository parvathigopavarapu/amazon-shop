import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { quotationUpload } from "./quotation-upload";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    quotationUpload
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(quotationUpload)
  ],
  exports: [
    quotationUpload
  ]
})

export class quotationUploadModule {
}