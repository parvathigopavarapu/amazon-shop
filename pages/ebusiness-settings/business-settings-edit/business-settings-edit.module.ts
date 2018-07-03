import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { businessSettingsEdit } from "./business-settings-edit";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    businessSettingsEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(businessSettingsEdit)
  ],
  exports: [
    businessSettingsEdit
  ]
})

export class businessSettingsEditModule {
}