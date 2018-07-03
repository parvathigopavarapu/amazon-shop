import { Injectable } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { execute, IProfile, IAddress, INotification, Profile, ServiceProvider } from 'mediserve-services';
import { Base } from './Base';

@Injectable()
export class SettingsBase extends Base {

    profile: IProfile;
    address: IAddress;
    notification: INotification;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.profile = new Profile();
    }

    async getProfile() {
        this.message = "Getting profile";
        await execute(this.svcsCtrl.profileService.getProfile()).success((response) => {
            let profile = response.data;
            this.profile = Object.assign({}, profile);
            this.address = Object.assign({}, profile.address);
            this.notification = Object.assign({}, profile.notification);
        });

    }

    updateProfile() {
        this.message = "Updating profile";
        execute(this.svcsCtrl.profileService.updateProfile(this.profile)).success((response) => {
            let profile = response.data;
            this.profile = Object.assign({}, profile);
            this.address = Object.assign({}, profile.address);
            this.notification = Object.assign({}, profile.notification);
            setTimeout(() => {
                this.gotoProfileView();
            }, 1000);
        }).failure((data) => {
            this.response = data.message;
        });

    }

    gotoProfileView() {
        this.navCtrl.push('profileDetails').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }

    gotoProfileEdit() {
        this.navCtrl.push('profileEdit')
    }

    gotoAccountHome() {
        this.navCtrl.setRoot('pharmacyAccountIndex')

    }

}