import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ServiceProvider, Business, Profile } from 'mediserve-services';
import { BusinessBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-ebusiness-home-registered',
    templateUrl: 'ebusiness-home-registered.html'
})
export class ebusinessHomeRegistered extends BusinessBase {

    logo: string;

    navList: any = [
        {
            order: 'Business Settings',
            page: 'businessSettings',
            icon: 'settings'
        },
          {
            order: 'Verify Business',
            page: 'ebusinessVerify',
            icon: 'ios-settings-outline'
        },
    ]

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "MediServe";
         this.logo = "medkit"

         this.profile = new Profile();
         this.business = new Business();

         this.getProfile();
         this.readPharmacy();
    }

}