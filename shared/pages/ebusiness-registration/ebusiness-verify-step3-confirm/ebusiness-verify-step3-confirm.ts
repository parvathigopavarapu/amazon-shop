import { ServiceProvider } from 'mediserve-services';
import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BusinessBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-ebusiness-verify-step3-confirm',
    templateUrl: 'ebusiness-verify-step3-confirm.html'
})
export class ebusinessVerifyStep3Confirm extends BusinessBase {
 
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
          this.title = "Confirmation"
    }

    gotoVerifyBusinessPage() {
       this.navCtrl.push('ebusinessVerify')
    }

   
}
