import { Component } from '@angular/core';
import { NavParams, NavController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage({
    segment: 'order-details/:orderId/:orderStatus',
    defaultHistory: ['orderList']
})

@Component({
    selector: 'page-order-details',
    templateUrl: 'order-details.html'
})

export class orderDetails {

    title: string;
    data1 = [];
    data2 = [];
    orderStatus: any;
    order: any;

    constructor(
        public params: NavParams,
        public navCtrl: NavController,
        public modal: ModalController
    ) {
        this.title = 'Order Information';
        this.data1 = ['OrderDetails', 'showDetails']
        this.data2 = ['QuotationDetails', 'showDetails']
        this.order = this.params.get('order');
        this.orderStatus = this.order.orderStatus;
    }

    toggleDetails(data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'arrow-forward';
        } else {
            data.showDetails = true;
            data.icon = 'arrow-up';
        }
    }

    toggleDetails1(data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'arrow-forward';
        } else {
            data.showDetails = false;
            data.showDetails = true;
            data.icon = 'arrow-up';
            data.showDetails = true;
            data.icon = 'arrow-up';
        }
    }

    gotoOrderList(orderStatus) {
        this.navCtrl.push('orderDetailsModal', { orderStatus });
    }

    ionViewWillEnter() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(56px)';
            });
        }
    }

    ionViewWillLeave() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(0)';
            });
        }
    }
}