import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ServiceProvider } from 'mediserve-services';
import { BusinessBase } from '../../../../pages/base';


@IonicPage()
@Component({
    selector: 'page-ebusiness-check-select',
    templateUrl: 'ebusiness-check-select.html'
})

export class ebusinessCheckSelect extends BusinessBase {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Business Registration Check';
        this.message = "Initiating";
    }

    ionViewDidLoad() {
    }

    ionViewWillEnter() {
    // this.processPhamacyList();
    // this.navCtrl.push('businessList')
    }

    selectPharmacy() {

    }

    signin() { 
        this.navCtrl.push('pharmacyIndex')
    }

    register() {
       this.navCtrl.push('ebusinessRegistrationStep1')
    }
}
