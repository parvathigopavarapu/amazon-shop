import { ServiceProvider, Pharmacy } from 'mediserve-services';
import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BusinessBase } from '../../../../pages/base';

@IonicPage()
@Component({
    selector: 'page-ebusiness-registration-step2',
    templateUrl: 'ebusiness-registration-step2.html'
})
export class ebusinessRegistrationStep2 extends BusinessBase {

    title: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);        
        this.title = "Business Address";
        this.business = new Pharmacy();
    }

    ionViewWillEnter() {
        this.getBusiness();
    }


    next() {
        this.setBusiness();
    }
}
