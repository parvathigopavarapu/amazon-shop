import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
    selector: 'page-order-history-filter-modal',
    templateUrl: 'order-history-filter-modal.html'
})

export class orderHistoryFilterModal {

    orderNumber: any;
    name: any;

    startDate: any;
    endDate: any;

    phoneNumber: any;

    constructor(public navCtrl: NavController) {

    }

    apply(orderNumber, name, startDate, endDate, phoneNumber) {
        this.navCtrl.pop()
    }

    reset() {
        this.orderNumber = null;
        this.name = null;
        this.startDate = null;
        this.endDate = null;
        this.phoneNumber = null;
    }

    cancel() {
        this.navCtrl.pop()
    }
    
}