import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ActionSheetController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
    selector: 'page-order-details-modal',
    templateUrl: 'order-details-modal.html'
})

export class orderDetailsModal {

    title: string;
    orderStatus: any;
    data: any;
    verify: any;
    logo: string;
    collected: string;

    prescriptionList: any = [
        {
            prescriptionName: 'Dolo-650',
            number: 8,
            days: 5,
            time: '1-0-1'
        },
        {
            prescriptionName: 'Imol-650',
            number: 8,
            days: 5,
            time: '1-0-1'
        },
        {
            prescriptionName: 'Vicks-500',
            number: 8,
            days: 5,
            time: '1-0-1'
        },
    ]
    constructor(
        public navCtrl: NavController,
        public param: NavParams,
        public view: ViewController,
        public actionSheet: ActionSheetController
    ) {
        this.title = "medi Serve";
        this.logo = "medkit"
        this.orderStatus = this.param.get('orderStatus')
    }

    gotoSamePage() {
        this.navCtrl.pop()
    }

    gotoOrderList(orderStatus, orderTitle) {
        this.navCtrl.push('orderList', { orderStatus, orderTitle })
    }

    gotoHome() {
        this.navCtrl.push('pharmacyOrderIndex')
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
