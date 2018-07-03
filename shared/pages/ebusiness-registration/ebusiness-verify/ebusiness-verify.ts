import { ServiceProvider } from 'mediserve-services';
import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { BusinessBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-ebusiness-verify',
    templateUrl: 'ebusiness-verify.html'
})
export class ebusinessVerify extends BusinessBase {

    navList: any = [
        {
            order: 'Verify Aadhar (Owner KYC)',
            page: 'ebusinessVerifyStep1Aadhar',
            icon: 'settings'
        }
    ]
    navList1: any = [
        {
            order: 'Upload Document',
            page: 'ebusinessVerifyUploadDocs',
            icon: 'settings'
        }
    ]

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Verify Business"
    }

    ionViewWillEnter() {
        //this.getProfile();
    }
    
    gotoPage() {
        this.navCtrl.push('ebusinessVerifyStep1Aadhar')
    }

    gotoUploadPage() {
        this.navCtrl.push('ebusinessVerifyUploadDocs')
    }

    submit() {
        this.navCtrl.push('pharmacyIndex')
    }


}