import { Component } from '@angular/core';
import { NavParams, NavController, ViewController, IonicPage } from 'ionic-angular';
import { BusinessBase } from "../../base/BusinessBase";
import { ServiceProvider, DeliveryZone } from "mediserve-services";

@IonicPage({
    defaultHistory: ['deliveryzones'],
    segment: 'deliveryzones-edit/:deliveryZoneId'
})

@Component({
    selector: 'page-deliveryzones-edit',
    templateUrl: 'deliveryzones-edit.html'
})

export class deliveryzonesEdit extends BusinessBase {

    title = "Edit Delivery Zone"

    constructor(public navParams: NavParams,
        public navCtrl: NavController,
        public view: ViewController,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.deliveryZoneId = this.navParams.get("deliveryZoneId");
        this.deliveryZone = new DeliveryZone();
    }

    ionViewWillEnter() {
        this.readDeliveryZone();
    }

    update() {
        this.updateDeliveryZone();
    }

    dismiss() {
        this.view.dismiss();
    }

    goback() {
        this.view.dismiss();
    }

}