import { Component } from '@angular/core';
import { NavParams, NavController, ModalController, ActionSheetController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
    selector: 'page-order-history',
    templateUrl: 'order-history.html'
})

export class orderHistory {

    title: string;

    order: any;
    orders;

    orderNumber: any;
    name: any;
    startDate: any;
    searchTerm: any;

    endDate: any;
    phoneNumber: any;

    initializer() {
        this.orders = [
            {
                contactName: 'Asha',
                phoneNumber: '9635698962',
                orderNumber: '234HUH',
                area: 'BTM1',
                orderStatus: 'Delivered',
                prescriptions: 2,
                orderTotal: 200,
                dates: "2017-11-20",
                estimated_deliveryTime: 5,
            },
            {
                contactName: 'Parvathi',
                phoneNumber: '9632589659',
                orderNumber: '5HJH8',
                area: 'JP Nagar',
                orderStatus: 'Delivered',
                prescriptions: 2,
                orderTotal: 500,
                dates: "2017-11-21",
                estimated_deliveryTime: 5
            },
            {
                contactName: 'Madhu',
                phoneNumber: '956231478',
                orderNumber: '23JHJ',
                area: 'HSR',
                orderStatus: 'Delivered',
                prescriptions: 2,
                orderTotal: 100,
                dates: "2017-11-22",
                estimated_deliveryTime: 5
            },
            {
                contactName: 'John',
                phoneNumber: '9874563214',
                orderNumber: '3456',
                area: 'BSK',
                orderStatus: 'Delivered',
                prescriptions: 2,
                orderTotal: 200,
                dates: "2017-11-23",
                estimated_deliveryTime: 5
            },
            {
                contactName: 'Manju',
                phoneNumber: '9636963258',
                orderNumber: '345NJG',
                area: 'KR Pura',
                orderStatus: 'Delivered',
                prescriptions: 2,
                orderTotal: 200,
                dates: "2017-11-24",
                estimated_deliveryTime: 5
            },
            {
                contactName: 'Ravi',
                phoneNumber: '8886598741',
                orderNumber: '345MK',
                area: 'BTM1',
                orderStatus: 'Delivered',
                prescriptions: 2,
                orderTotal: 200,
                dates: "2017-11-25",
                estimated_deliveryTime: 5
            },
            {
                contactName: 'Shruthi',
                phoneNumber: '7895689632',
                orderNumber: '345ML2',
                area: 'BTM',
                orderStatus: 'Delivered',
                prescriptions: 2,
                orderTotal: 2000,
                dates: "2017-11-26",
                estimated_deliveryTime: 5
            },
        ]
    }

    constructor(
        public params: NavParams,
        public navCtrl: NavController,
        public modalCtrl: ModalController,
        public alertCtrl: ActionSheetController
    ) {
        this.initializer();
        this.title = 'Order History';
        this.orderNumber = this.params.get('orderNumber');
        this.startDate = this.params.get('startDate');
        this.endDate = this.params.get('endDate');
        this.name = this.params.get('name')
        this.phoneNumber = this.params.get('phoneNumber')
    }
    gotoOrderDetails() {
    }

    backToProfileMainPage() {
        this.navCtrl.setRoot('pharmacyIndex', { tabIndex: 2 })
    }
    getItems(searchbar) {
        this.initializer();
        let val = searchbar.target.value;
        if (val && val.trim() != '') {
            this.orders = this.orders.filter((order) => {
                return (order.phoneNumber.toLowerCase().indexOf(val.toLowerCase()) > -1)
            });
        }
        else {
            return false;
        }
    }

    ionViewDidLoad() {
        if (this.phoneNumber != null && this.orderNumber == null && this.name == null && this.startDate == null && this.endDate == null) {
            let val1 = this.orderNumber;
            this.orders = this.orders.filter((order) => {
                return (order.orderNumber.toLowerCase().indexOf(val1.toLowerCase()) > -1)
            })
        }
        else if (this.orderNumber != null && this.name == null && this.startDate == null && this.endDate == null) {
            let val1 = this.orderNumber;
            this.orders = this.orders.filter((order) => {
                return (order.orderNumber.toLowerCase().indexOf(val1.toLowerCase()) > -1)
            })
        }
        else if (this.name != null && this.startDate == null && this.endDate == null && this.orderNumber == null) {
            let val1 = this.name;
            this.orders = this.orders.filter((order) => {
                return (order.contactName.toLowerCase().indexOf(val1.toLowerCase()) > -1)
            })
        }
        else if (this.startDate != null && this.endDate != null && this.name == null && this.orderNumber == null) {
            let val1 = new Date(this.startDate);
            let val2 = new Date(this.endDate);
            this.orders = this.orders.filter((order) => {
                let date = new Date(order.dates);
                return (date >= val1 && date <= val2);
            });
        }
        else if (this.orderNumber != null && this.name != null) {
            let val1 = this.orderNumber;
            let val2 = this.name;
            this.orders = this.orders.filter((order) => {
                return ((order.orderNumber.toLowerCase().indexOf(val1.toLowerCase()) > -1) || (order.contactName.toLowerCase().indexOf(val2.toLowerCase()) > -1))
            })

        }
        else if (this.orderNumber != null && this.startDate != null && this.endDate != null) {
            let val1 = this.orderNumber;
            let val3 = new Date(this.startDate);
            let val4 = new Date(this.endDate);
            this.orders = this.orders.filter((order) => {
                let date = new Date(order.dates);
                return ((order.orderNumber.toLowerCase().indexOf(val1.toLowerCase()) > -1) || (date >= val3 && date <= val4))
            })
        }
        else if (this.orderNumber != null && this.startDate != null && this.endDate != null && this.name != null) {
            let val1 = this.orderNumber;
            let val2 = this.name;
            let val3 = new Date(this.startDate);
            let val4 = new Date(this.endDate);
            this.orders = this.orders.filter((order) => {
                let date = new Date(order.dates);
                return ((order.orderNumber.toLowerCase().indexOf(val1.toLowerCase()) > -1) || (order.contactName.toLowerCase().indexOf(val2.toLowerCase()) > -1) || (date >= val3 && date <= val4))
            })
        }
    }

    funnel() {
        let modal = this.modalCtrl.create('orderHistoryFilterModal');
        modal.present();
    }

    sort() {
        let actionSheet = this.alertCtrl.create({
            buttons: [
                {
                    text: 'By Name',
                    role: 'destructive',
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Price Low to High',
                    handler: () => {
                    }
                },
                {
                    text: 'Price High to Low',
                    handler: () => {
                        this.orders.sort((a, b) => {
                            return parseFloat(b.orderTotal) - parseFloat(a.orderTotal);
                        });
                    }
                },
                {
                    text: 'Date Ascending Order',
                    handler: () => {
                        this.orders.sort((a, b) => {
                            return new Date(a.dates).getTime() - new Date(b.dates).getTime()
                        });
                    }
                },
                {
                    text: 'Date Descending Order',
                    handler: () => {
                        this.orders.sort((a, b) => {
                            new Date(b.dates).getTime() - new Date(a.dates).getTime()
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

}
