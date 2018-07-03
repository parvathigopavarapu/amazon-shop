import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { businessSettings } from "./business-settings";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    businessSettings
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(businessSettings)
  ],
  exports: [
    businessSettings
  ]
})

export class businessSettingsModule {
}