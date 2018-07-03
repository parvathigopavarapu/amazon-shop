import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ServiceProvider, Profile, Address, Notification } from "mediserve-services";
import { SettingsBase } from '../../../../pages/base';

@IonicPage({
    defaultHistory: ['profileDetails']
})

@Component({
    selector: 'page-profile-edit',
    templateUrl: 'profile-edit.html'
})

export class profileEdit extends SettingsBase {

    tabIndex: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Edit Profile";
        this.tabIndex = "0";
        this.profile = new Profile();
        this.address = new Address();
        this.notification = new Notification();
    }

    ionViewDidLoad() {
        this.getProfile();
    }

    ionViewWillEnter() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(56px)';
            });
        }
    }

    ionViewWillLeave() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(0)';
            });
        }
    }

    update() {
        this.updateProfile();
    }

    cancel() {
        this.gotoProfileView();
    }

}