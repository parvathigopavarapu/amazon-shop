import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage, } from 'ionic-angular';

@IonicPage({
    segment: 'order-details-new/:orderId',
    defaultHistory: ['quotationUpload']
})

@Component({
    selector: 'page-order-details-new',
    templateUrl: 'order-details-new.html'
})

export class orderDetailsNew {

    title: string;

    quotePrice: any;
    quotePrice1: any;

    orderDeliveryCharge: any;
    quoteDiscount: any;
    quoteTotal: number;
    day: any;
    time: any;
    item: any;
    array = [];
    image = [];

    constructor(
        public navCtrl: NavController,
        public params: NavParams
    ) {
        this.title = 'Quotation Details';
        this.quotePrice = this.params.get('quote')
        this.quoteDiscount = this.params.get('quoteDiscount')
        this.item = this.params.get('i');
        this.image = this.params.get('arry')
        for (let i = 0; i < this.item; i++) {
            this.array.push({
                image: this.image[i],
                quotePrice: this.quotePrice[i]
            })
        }
        let quotePrice = 0;
        for (let j = 0; j < this.item; j++) {
            quotePrice = parseFloat(this.quotePrice[j]) + quotePrice;
        }
        for (let i = 0; i < this.item; i++) {
            this.quoteTotal = quotePrice + 0 - 0;
        }
    }

    gotoOrderPage() {
        this.navCtrl.setRoot('pharmacyOrderIndex')
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