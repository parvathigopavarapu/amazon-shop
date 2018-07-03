import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';
import { ServiceProvider, OpeningHour } from "mediserve-services";
import { BusinessBase } from "../../base/BusinessBase";

@IonicPage({
    defaultHistory: ['openinghours']
})

@Component({
    selector: 'page-openingHours-add',
    templateUrl: 'openingHours-add.html'
})
export class openinghoursAdd extends BusinessBase {

    constructor(
        public navParams: NavParams,
        public navCtrl: NavController,
        public view: ViewController,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Opening Hour Add'
    }

    ionViewWillEnter() {
        this.openingHours = new OpeningHour();
    }

    add() {
        this.createOpeningHour();
    }

    dismiss(){
        this.navCtrl.pop();
    }
    
}