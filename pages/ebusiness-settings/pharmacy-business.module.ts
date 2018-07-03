import { NgModule } from '@angular/core';
import { pharmacyBusinessIndexModule } from "./business-index/business-index.module";
import { businessSettingsModule } from "./business-settings/business-settings.module";
import { businessSettingsEditModule } from "./business-settings-edit/business-settings-edit.module";
import { deliveryzonesModule } from "./deliveryzones/deliveryzones.module";
import { deliveryzonesAddModule } from "./deliveryzones-add/deliveryzones-add.module";
import { deliveryzonesEditModule } from "./deliveryzones-edit/deliveryzones-edit.module";
import { openinghoursModule } from "./openinghours/openinghours.module";
import { openinghoursEditModule } from "./openinghours-edit/openinghours-edit.module";
import { userAddModule } from "./user-add/user-add.module";
import { userDetailsModule } from "./user-details/user-details.module";
import { userEditModule } from "./user-edit/user-edit.module";
import { userListModule } from "./user-list/user-list.module";
import { openinghoursAddModule } from "./openingHours-add/openingHours-add.module";
import { businessListModule } from "./business-list/business-list.module";

@NgModule({
  declarations: [

  ],
  imports: [
    pharmacyBusinessIndexModule,
    businessListModule,
    businessSettingsModule,
    businessSettingsEditModule,
    deliveryzonesModule,
    deliveryzonesAddModule,
    deliveryzonesEditModule,
    openinghoursModule,
    openinghoursEditModule,
    userAddModule,
    userDetailsModule,
    userEditModule,
    userListModule,
    openinghoursAddModule
  ],
})
export class pharmacyBusinessModule { }