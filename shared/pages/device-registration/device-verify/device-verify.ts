import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ServiceProvider } from 'mediserve-services';
import { RegistrationBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-deviceverify',
    templateUrl: 'device-verify.html'
})

export class deviceverify extends RegistrationBase {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Verify Phone';
        this.getPhonenumber();
    }

    next() {
        this.confirmDevice();
    }

    // back() {
    //     this.gotoDeviceRegister();
    // }
}
