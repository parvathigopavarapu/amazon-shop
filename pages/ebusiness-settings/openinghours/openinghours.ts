import { Component } from '@angular/core';
import { NavParams, NavController, ModalController, IonicPage } from 'ionic-angular';
import { BusinessBase } from "../../base/BusinessBase";
import { ServiceProvider, OpeningHour } from "mediserve-services";

@IonicPage({
    defaultHistory: ['pharmacyBusinessIndex']
})

@Component({
    selector: 'page-openinghours',
    templateUrl: 'openinghours.html'
})

export class openinghours extends BusinessBase {

    constructor(public navParams: NavParams,
        public navCtrl: NavController,
        public modal: ModalController,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Opening Hour';
        this.openingHours = Array.of(new OpeningHour())
    }

    ionViewWillEnter() {
        this.listOpeningHour()
    }

    goback() {
        this.navCtrl.setRoot('pharmacyBusinessIndex')
    }

    edit(openingHourId: string) {
        console.log("Edit id: " + openingHourId);
        this.openingHourId = openingHourId;
        this.navCtrl.push('openinghoursEdit', {
            openingHourId: openingHourId
        })
    }

    delete(openingHourId: string) {
        console.log("Delete id: " + openingHourId);
        this.openingHourId = openingHourId;
        this.deleteOpeningHour();
    }

    add() {
        this.navCtrl.push('openinghoursAdd')
    }

}
