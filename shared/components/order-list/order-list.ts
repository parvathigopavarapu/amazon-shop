import { Component, Input } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'order-list',
    templateUrl: 'order-list.html'
})

export class orderList {

    @Input('order') order: any;

    @Input('orderStatus') orderStatus: any;

    constructor(public nav: NavController,
        public alertCtrl: AlertController
    ) {

    }

    gotoOrderDetails(order) {
        if (order.orderStatus != 'new' && order.orderStatus != 'rejected') {
            let orderId = order.id;
            let orderStatus = order.orderStatus;
            this.nav.push('orderDetails', { order, orderId, orderStatus })
        }
        else {
            this.nav.push('quotationDetails', { order })
        }
    }

    gotoOrderList(orderStatus) {
        this.nav.push('orderDetailsModal', { orderStatus });
    }

    gotoPreparedOrdersPage(orderStatus) {
        let alert1 = this.alertCtrl.create({
            title: 'Confirmation',
            subTitle: 'Are you sure, do you want revert?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'Ok',
                    handler: () => {
                        this.nav.push('orderList', { orderStatus })
                    }
                }, {
                    text: 'No',
                    role: 'No',
                    handler: () => {
                    }
                }
            ]

        });
        alert1.present();
    }

    gotoDirectionPage() {
        this.nav.push('orderDeliveryDirection')
    }

}