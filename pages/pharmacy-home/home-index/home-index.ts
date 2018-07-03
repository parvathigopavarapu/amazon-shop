import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ServiceProvider, Business } from 'mediserve-services';
import { BusinessBase } from "../../base/BusinessBase";

@IonicPage()

@Component({
    selector: 'page-home-index',
    templateUrl: 'home-index.html'
})

export class pharmacyHomeIndex extends BusinessBase {
    
    logo: string;

    navList: any = [
        {
            order: 'Order Management',
            page: 'pharmacyIndex',
            index: 1,
            icon: 'cog'
        },
        {
            order: 'Discount Management',
            page: 'pharmacyIndex',
            index: 10,
            icon: 'logo-euro'
        }
    ]

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "MediServe";
        this.logo = "medkit";
        this.business = new Business();
    }

    ionViewWillEnter() {
        this.getProfile();
        this.readPharmacy();
    }

    gotoPage(page: any) {
        this.navCtrl.push('pharmacyIndex', { tabIndex: 1 })
    }

    gotoChatPage() {
        this.navCtrl.push('chatHistory')
    }

}