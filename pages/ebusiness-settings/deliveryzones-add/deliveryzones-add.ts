import { Component } from '@angular/core';
import { NavParams, NavController, ViewController, IonicPage } from 'ionic-angular';
import { BusinessBase } from "../../base/BusinessBase";
import { ServiceProvider, DeliveryZone } from "mediserve-services";

@IonicPage({
    defaultHistory: ['deliveryzones']
})

@Component({
    selector: 'page-deliveryzones-add',
    templateUrl: 'deliveryzones-add.html'
})

export class deliveryzonesAdd extends BusinessBase {

    item = [];

    constructor(public navParams: NavParams,
        public navCtrl: NavController,
        public view: ViewController,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Add Delivery Zone";
        this.deliveryZone = new DeliveryZone();
    }

    ionViewWillEnter() {
        this.deliveryZone = new DeliveryZone();
    }
    add() {
        this.createDeliveryZone();
    }

    dismiss() {
        this.view.dismiss();
    }
    
}