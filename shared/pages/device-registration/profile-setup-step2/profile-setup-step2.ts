import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ServiceProvider, Profile } from 'mediserve-services';
import { RegistrationBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-profile-setup-step2',
    templateUrl: 'profile-setup-step2.html'
})

export class profilesetupStep2 extends RegistrationBase {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Profile Setup';
        this.profile = new Profile();
    }
    
    ionViewDidLoad() {
        this.getProfile();
    }

    next() {
        this.setProfile();
    }

}
