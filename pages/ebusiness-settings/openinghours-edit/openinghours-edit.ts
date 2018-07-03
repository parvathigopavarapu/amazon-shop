import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';
import { BusinessBase } from "../../base/BusinessBase";
import { OpeningHour, ServiceProvider } from "mediserve-services";

@IonicPage({
    segment: 'openinghours-edit/:openingHourId',
    defaultHistory: ['openinghours']
})

@Component({
    selector: 'page-openinghours-edit',
    templateUrl: 'openinghours-edit.html'
})

export class openinghoursEdit extends BusinessBase {

    constructor(public navParams: NavParams,
        public navCtrl: NavController,
        public view: ViewController,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Opening Hour'
    }

    ionViewWillEnter() {
        this.openingHours = new OpeningHour()
        this.openingHourId = this.navParams.get('openingHourId');
        this.readOpeningHour();
    }

    update() {
        this.updateOpeningHour();
    }

    dismiss() {
        this.view.dismiss();
    }

}