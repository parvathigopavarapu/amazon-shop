import { ServiceProvider } from 'mediserve-services';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BusinessBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-ebusiness-registration-step4',
    templateUrl: 'ebusiness-registration-step4.html'
})

export class ebusinessRegistrationStep4 extends BusinessBase {

    logo: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Confirmation";
         this.logo = "medkit";
    }

    gotoVerifyBusinessPage() {
        this.navCtrl.push('pharmacyIndex')
    }

}
