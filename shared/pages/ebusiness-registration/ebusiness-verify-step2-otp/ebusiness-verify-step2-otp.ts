import { ServiceProvider } from 'mediserve-services';
import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BusinessBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-ebusiness-verify-step2-otp',
    templateUrl: 'ebusiness-verify-step2-otp.html'
})

export class ebusinessVerifyStep2Otp extends BusinessBase {
   
    aadhar = 'aadhar'

    otp: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Verify Aadhar";
    }

    back() {
        this.navCtrl.push('ebusinessVerifyStep1Aadhar');
    }

    next() {
        this.navCtrl.push('ebusinessVerifyStep3Confirm')
    }

}
