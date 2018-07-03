import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ServiceProvider } from 'mediserve-services';
import { BusinessBase } from '../../../../pages/base';
@IonicPage()

@Component({
    selector: 'page-ebusiness-home-register',
    templateUrl: 'ebusiness-home-register.html'
})
export class ebusinessHomeRegister extends BusinessBase {
    
    navList: any = [
        {
            order: 'Register Pharmacy',
            page: 'ebusinessRegistrationStep1',
            icon: 'settings'
        },

    ]

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "MediServe";
    }

    ionViewWillEnter() {
    }


}