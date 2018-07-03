import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ServiceProvider, Profile } from "mediserve-services";
import { SettingsBase } from '../../../../pages/base';

@IonicPage({
    defaultHistory: ['pharmacyAccountIndex']
})

@Component({
    selector: 'page-profile-details',
    templateUrl: 'profile-details.html'
})

export class profileDetails extends SettingsBase {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Profile Details";
        this.profile = new Profile();
    }

    ionViewDidLoad() {
        this.getProfile();
    }

    back() {
        this.gotoAccountHome();
    }

    edit() {
        this.gotoProfileEdit();
    }
    
}