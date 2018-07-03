import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ServiceProvider, Pharmacy } from "mediserve-services";
import { BusinessBase } from '../../../../pages/base';

@IonicPage()
@Component({
    selector: 'page-ebusiness-registration-step1',
    templateUrl: 'ebusiness-registration-step1.html'
})
export class ebusinessRegistrationStep1 extends BusinessBase {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Business Settings";
        this.business = new Pharmacy();
    }

    ionViewWillEnter() {
        console.log("get Business")
        this.getBusiness();
    }


    next() {
        console.log(this.business);
        this.initBusiness();
    }
}
