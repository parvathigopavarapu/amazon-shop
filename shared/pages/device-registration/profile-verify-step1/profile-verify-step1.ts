import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ServiceProvider } from 'mediserve-services';
import { RegistrationBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-profile-verify-step1',
    templateUrl: 'profile-verify-step1.html'
})

export class profileVerifyStep1 extends RegistrationBase {
    
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);

        this.title = 'Profile Verify';
        this.getProfile();
    }

    next() {
        this.setVerifyProfile();
    }

}
