import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, App } from 'ionic-angular';
import { ServiceProvider, Business } from "mediserve-services";
import { BusinessBase } from "../../base/BusinessBase";

@IonicPage({
    segment: 'order-index'
})

@Component({
    selector: 'page-order-index',
    templateUrl: 'order-index.html'
})

export class pharmacyOrderIndex extends BusinessBase {

    logo: string;

    navList: any = [
        {
            ordersTitle: 'New Prescriptions',
            badge: 20,
            icon: 'aperture',
            page: 'orderList',
            orderStatus: "new"
        },
        {
            ordersTitle: 'Quoted Orders',
            badge: 25,
            icon: 'disc',
            page: 'orderListQuotation',
            orderStatus: 'quoted'
        },
        {
            ordersTitle: 'Confirmed Orders',
            badge: 25,
            icon: 'checkmark-circle',
            page: 'orderList',
            orderStatus: 'confirmed'
        },
        {
            ordersTitle: 'Prepared Orders',
            badge: 25,
            icon: 'color-filter',
            page: 'orderList',
            orderStatus: 'prepared'
        },
        {
            ordersTitle: 'Out For Delivery Orders',
            badge: 25,
            icon: 'md-bicycle',
            page: 'orderList',
            orderStatus: 'outForDelivery'
        },
        {
            ordersTitle: 'Delivered Orders',
            badge: 25,
            icon: 'thumbs-up',
            page: 'orderList',
            orderStatus: 'delivered'
        },
        {
            ordersTitle: 'Rejected Orders',
            badge: 25,
            icon: 'thumbs-down',
            page: 'orderList',
            orderStatus: 'rejected'
        },
    ];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider,
        public app: App
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = 'Order Management';
        this.logo = "medkit";
        this.business = new Business()
    }

    ionViewWillEnter() {
        this.getProfile();
        this.readPharmacy();
    }

    gotoPage(orderStatus, orderTitle) {
        this.navCtrl.push('orderList', { orderStatus, orderTitle })
    }

}