import { ServiceProvider, Pharmacy } from 'mediserve-services';
import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BusinessBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-ebusiness-registration-step3',
    templateUrl: 'ebusiness-registration-step3.html'
})

export class ebusinessRegistrationStep3 extends BusinessBase {

    logo:string;
    all: boolean;
    privacy: boolean;
    site: boolean;
    
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl)
        this.title = "Business Settings";
        this.logo = "medkit"

        this.pharmacy = new Pharmacy();
    }

    ionViewWillEnter() {
        this.getBusiness();
    }

    agree() {
        this.registerPharmacy();
    }
    
}
