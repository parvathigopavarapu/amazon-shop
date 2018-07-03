import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
    defaultHistory: ['orderListOutfordelivery']
})

@Component({
    selector: 'page-order-delivery-direction',
    templateUrl: 'order-delivery-direction.html'
})

export class orderDeliveryDirection {
    title: string;

    constructor(public navCtrl: NavController) {
        this.title = "Direction";
    }
}