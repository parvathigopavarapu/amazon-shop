import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ServiceProvider } from 'mediserve-services';
import { BusinessBase } from "../../base/BusinessBase";

@IonicPage()

@Component({
    selector: 'page-business-list',
    templateUrl: 'business-list.html'
})

export class businessList extends BusinessBase {

    logo: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Business List";
        this.logo = "medkit";
    }

    ionViewWillEnter() {
        this.listPharmacy()
    }

    selectedPharmacy(pharmacy) {
     this.selectPharmacy(pharmacy)
    }
    
}