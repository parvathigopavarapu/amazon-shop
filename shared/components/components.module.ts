import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { HeaderPart } from "./header-main/header-main";
import { SubHeaderPart } from "./header-sub/header-sub";
import { orderList } from "./order-list/order-list";
import { NavigationLinks } from "./pharmacy-navigation-top/pharmacy-navigation-top";
import { OtpVerifyForm } from "./otp-verify-form/otp-verify-form";

import { ProfileDetails } from "./profile-details/profile-details";
import { ProfileForm } from "./profile-form/profile-form";
import { BusinessDetails } from "./business-details/business-details";
import { BusinessForm } from "./business-form/business-form";
import { AddressForm } from "./address-form/address-form";
import { DeliveryZoneForm } from "./deliveryzone-form/deliveryzone-form";

@NgModule({
    declarations: [
        HeaderPart,
        SubHeaderPart,
        NavigationLinks,
        orderList,
        OtpVerifyForm,
        ProfileDetails,
        ProfileForm,
        BusinessDetails,
        BusinessForm,
        AddressForm,
        DeliveryZoneForm
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        CommonModule,
        HeaderPart,
        SubHeaderPart,
        NavigationLinks,
        orderList,
        OtpVerifyForm,
        ProfileDetails,
        ProfileForm,
        BusinessDetails,
        BusinessForm,
        AddressForm,
        DeliveryZoneForm
    ],
})
export class ComponentsModule {
}