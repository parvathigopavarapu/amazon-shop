import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { userDetails } from "./user-details";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    userDetails
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(userDetails)
  ],
  exports: [
    userDetails
  ]
})

export class userDetailsModule {
}