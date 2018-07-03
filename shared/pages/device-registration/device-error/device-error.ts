import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ServiceProvider } from 'mediserve-services';
import { RegistrationBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-deviceerror',
    templateUrl: 'device-error.html'
})

export class deviceerror extends RegistrationBase {

    subTitle;
    status: number = 0;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Medi Serve';
        this.subTitle = "Network Error occoured"
        this.message = "Please retry after sometime!";
        this.response = this.navParams.get("message");
        let status = this.navParams.get("status");
        this.status = status ? status : 0;
    }

    next() {
        if (this.status == 0) {
            this.navCtrl.setRoot('devicecheck')
            //this.navCtrl.last();
        } else {
            //this.navCtrl.last();
            this.navCtrl.setRoot('devicecheck')
        }
    }

}
