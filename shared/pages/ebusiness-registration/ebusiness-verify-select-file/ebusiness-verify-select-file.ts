import { ServiceProvider } from 'mediserve-services';
import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BusinessBase } from '../../../../pages/base';

@IonicPage()

@Component({
    selector: 'page-ebusiness-verify-select-file',
    templateUrl: 'ebusiness-verify-select-file.html'
})

export class ebusinessVerifySelectFile extends BusinessBase {
    files: any;
    select1: boolean = false;
    selected_file:string;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider,
        public modalCtrl: ModalController,
        public view: ViewController
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Upload Document";
        this.files = ['driving_license_2345342.pdf', 'bank_passbook_2345342.pdf', 'passport_2345342.pdf',
            'voter_id_2345342.pdf', 'gas_conection_bill_2345342.pdf', 'Wholesale_Drug_Licence.pdf']

    }
    dismiss() {
        this.view.dismiss();
    }
    select(file) {
        this.selected_file=file;
        this.select1 = true;
    }
    gotoVerifyBusinessPage(file) {
        this.navCtrl.push('ebusinessVerifyUploadDocs',{file})
    }
}