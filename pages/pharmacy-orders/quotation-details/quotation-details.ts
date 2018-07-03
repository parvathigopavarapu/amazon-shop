import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, ActionSheetController, IonicPage } from 'ionic-angular';

@IonicPage({
  defaultHistory: ['orderList']
})

@Component({
  selector: 'page-quotation-details',
  templateUrl: 'quotation-details.html'
})

export class quotationDetails {

  order: any;
  title: string;
  i: any;

  constructor(
    public navCtrl: NavController,
    public param: NavParams,
    public actionSheet: ActionSheetController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) {
    this.title = "Order Details"
    this.i = this.param.get('i');
    this.order = this.param.get('order');
    if (this.i == null) {
      this.i = 0;
    }
    else {
      return this.i;
    }
  }

  uploadquatation() {
    let actionSheet = this.actionSheet.create({
      title: 'Choose Option',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          role: 'destructive',
          handler: () => {
            let i = this.i;
            this.navCtrl.push('quotationUpload', { i })
          }
        }, {
          text: 'Gallery',
          icon: 'image',
          handler: () => {
            let i = this.i;
            this.navCtrl.push('quotationUpload', { i })
          }
        }
      ]
    });
    actionSheet.present();
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

  rejectorder(orderStatus) {
    let alert1 = this.alertCtrl.create({
      title: 'Warning',
      subTitle: 'Are you sure, do you want reject?',
      cssClass: 'alertDanger',
      buttons: [
        {
          text: 'Yes',
          role: 'Ok',
          handler: () => {
            this.navCtrl.push('orderList', { status })
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

  gotoOrderList(orderStatus) {
    this.navCtrl.push('orderList', { orderStatus })
  }
  
  createQuote(){
   let order = this.order
this.navCtrl.push('quotationCreate', {order})
  }

}
