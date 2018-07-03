import { Component } from '@angular/core';
import { NavParams, NavController, ModalController, IonicPage } from 'ionic-angular';
import { BusinessBase } from "../../base/BusinessBase";
import { ServiceProvider } from "mediserve-services";

@IonicPage({
    defaultHistory: ['pharmacyBusinessIndex']
})

@Component({
    selector: 'page-deliveryzones',
    templateUrl: 'deliveryzones.html'
})

export class deliveryzones extends BusinessBase {

    constructor(public navParams: NavParams,
        public navCtrl: NavController,
        public modal: ModalController,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Delivery Zone'
    }

    ionViewWillEnter() {
        this.listDeliveryZone();
    }

    edit(deliveryZoneId: string) {
        console.log("Edit id: " + deliveryZoneId);
        this.deliveryZoneId = deliveryZoneId;
        this.navCtrl.push('deliveryzonesEdit', {
            deliveryZoneId: deliveryZoneId
        })
    }

    delete(deliveryZoneId: string) {
        console.log("Delete id: " + deliveryZoneId);
        this.deliveryZoneId = deliveryZoneId;
        this.deleteDeliveryZone();
    }

    add() {
        this.gotoAddDeliveryZone()
    }

}


