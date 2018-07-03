import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ServiceProvider } from 'mediserve-services';
import { RegistrationBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-devicecheck',
    templateUrl: 'device-check.html'
})

export class devicecheck extends RegistrationBase {
    
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Device Check';
        this.message = "Initiating";
    }

    ionViewDidLoad() {
        this.resetSession();
    }
    
    ionViewWillEnter() {
        this.verifyProfile();
    }
    gotoRegister(){
        
    }
}
