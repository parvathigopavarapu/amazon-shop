import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { userEdit } from "./user-edit";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    userEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(userEdit)
  ],
  exports: [
    userEdit
  ]
})

export class userEditModule {
}