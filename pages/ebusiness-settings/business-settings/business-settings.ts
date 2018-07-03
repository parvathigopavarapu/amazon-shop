import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { BusinessBase } from "../../base/BusinessBase";
import { ServiceProvider, Business } from "mediserve-services";

@IonicPage({
  defaultHistory: ['pharmacyBusinessIndex']
})

@Component({
  selector: 'page-business-settings',
  templateUrl: 'business-settings.html'
})

export class businessSettings extends BusinessBase {
  
  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    public svcsCtrl: ServiceProvider
  ) {
    super(navCtrl, navParams, svcsCtrl);
    this.title = "Business Details";
    this.business = new Business();
  }

  ionViewDidLoad() {
    this.readPharmacy();
  }

  edit(businessId: string) {
    this.businessId = businessId;
    this.gotoBusinessProfileEdit(businessId);
  }

}