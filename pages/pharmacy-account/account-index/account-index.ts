import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ServiceProvider, Business } from 'mediserve-services';
import { BusinessBase } from "../../base/BusinessBase";

@IonicPage()

@Component({
    selector: 'page-account-index',
    templateUrl: 'account-index.html'
})

export class pharmacyAccountIndex extends BusinessBase {

    business: Business;

    profileList: any = [
        {
            order: 'Profile Details',
            page: 'profileDetails',
            icon: 'person'
        },
        {
            order: 'Pharmacy Settings',
            page: 'pharmacyBusinessIndex',
            icon: 'refresh-circle',
            param: ''
        },
        {
            order: 'Pharmacy Order History',
            page: 'orderHistory',
            icon: 'list'
        }
    ]

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'My account';
        this.business = new Business();
    }

    ionViewWillEnter() {
        this.getProfile();
        this.readPharmacy();
    }

    signOut() {
        this.logout();
    }

    selectPharmacy() {
        this.navCtrl.push('businessList')
    }

}