import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { BusinessBase } from "../../base/BusinessBase";
import { ServiceProvider, Business } from "mediserve-services";

@IonicPage({
    segment: 'business-settings/:businessId/edit',
    defaultHistory: ['businessSettings']
})

@Component({
    selector: 'page-business-settings-edit',
    templateUrl: 'business-settings-edit.html'
})
export class businessSettingsEdit extends BusinessBase {

    business: Business;
    tabIndex: string = "0";

    constructor(public navParams: NavParams,
        public navCtrl: NavController,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Edit Business Details";
        this.business = new Business();
    }

    ionViewDidLoad() {
        this.readPharmacy();
    }

    update() {
        this.updatePharmacy();
    }

    cancel() {
        this.gotoBusinessProfileView();
    }

}