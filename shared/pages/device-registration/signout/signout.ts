import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ServiceProvider } from 'mediserve-services';
import { RegistrationBase } from '../../../../pages/base';


@IonicPage()
@Component({
    selector: 'page-signout',
    templateUrl: 'signout.html'
})
export class signout extends RegistrationBase {
    
    subTitle;
    status: number = 0;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);

        this.title = 'Sign out';
        this.subTitle = "Logged out successfully"
        this.message = "Please click on Login button to relogin!";

        this.response = this.navParams.get("message");
        let status = this.navParams.get("status");
        this.status = status ? status : 0;
    }

    ionViewDidEnter() {
        //this.menuCtrl.enable(false);
    }

    ionViewDidLoad() {
        //this.logout();
    }

    next() {
        this.navCtrl.setRoot('devicecheck');
    }

}
