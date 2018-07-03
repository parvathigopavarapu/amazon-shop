import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ServiceProvider, Business } from 'mediserve-services';
import { BusinessBase } from "../../base/BusinessBase";

@IonicPage({
    defaultHistory: ['pharmacyAccountIndex']
})

@Component({
    selector: 'page-business-index',
    templateUrl: 'business-index.html'
})
export class pharmacyBusinessIndex extends BusinessBase {

    profileList: any = [
        {
            order: 'Business Details',
            page: 'businessSettings',
            icon: 'settings'
        },
        {
            order: 'User Management',
            page: 'userList',
            icon: 'list'
        },
        {
            order: 'Opening Hours ',
            page: 'openinghours',
            icon: 'time'
        },
        {
            order: 'Delivery Zone',
            page: 'deliveryzones',
            icon: 'compass'
        },

    ]

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Business Management";
         this.business = new Business();
    }

    ionViewWillEnter() {
        this.getProfile();
        this.readPharmacy();
    }

}