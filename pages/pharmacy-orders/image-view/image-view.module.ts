import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { imageView } from "./image-view";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    imageView
  ],
  imports: [
        ComponentsModule,
    IonicPageModule.forChild(imageView)
  ],
  exports: [
    imageView
  ]
})

export class imageViewModule {
}