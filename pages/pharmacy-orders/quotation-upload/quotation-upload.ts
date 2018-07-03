import { Component } from '@angular/core';
import { NavParams, NavController, ActionSheetController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage({
  defaultHistory: ['quotationDetails']
})

@Component({
  selector: 'page-quotation-upload',
  templateUrl: 'quotation-upload.html'
})

export class quotationUpload {

  title: string;
  image: any;
  i: any;

  quoteImage: any;
  length: any;

  quotePrice: Array<number> = [];
  orderDeliveryCharge: any;
  quoteDiscount: any;

  error: boolean = false;
  item: any;
  array: any;

  constructor(
    public params: NavParams,
    public navCtrl: NavController,
    public actionSheet: ActionSheetController,
    public modalCtrl: ModalController
  ) {
    this.title = "Upload Quotation";
    this.i = this.params.get('i')
    this.quoteImage = ['pre', 'pre2', 'pre3', 'quote', 'quote1']
  }

  valChange(value: number, index: number): void {
    this.quotePrice[index] = value;
  }

  movetoquatationdetailspage() {
    let arry = this.quoteImage;
    let quote = this.quotePrice;
    let orderDeliveryCharge = this.orderDeliveryCharge;
    let quoteDiscount = this.quoteDiscount;
    let i = this.i;
    i++;
    if (quote.length != this.i + 1) {
      this.error = true;
    }
    else {
      this.navCtrl.push('orderDetailsNew', { quote, i, arry, orderDeliveryCharge, quoteDiscount })
    }
  }

  gotoUploadImagePage(i) {
    let actionSheet = this.actionSheet.create({
      title: 'Choose Option',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          role: 'destructive',
          handler: () => {
            let i = this.i;
            i++;
            this.navCtrl.push('quotationUpload', { i })
          }
        }, {
          text: 'Gallery',
          icon: 'image',
          handler: () => {
            let i = this.i;
            i++;
            this.navCtrl.push('quotationUpload', { i })
          }
        }
      ]
    });
    actionSheet.present();
  }

  removeImage(i) {
    this.quoteImage.splice(i)
    this.i--;
  }

  viewImage(j) {
    let image = this.quoteImage[j]
    let data = "view"
    let modal = this.modalCtrl.create('imageView', { image, data });
    modal.present();
  }

  ionViewWillEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.transform = 'translateY(56px)';
      });
    }
  }

  ionViewWillLeave() {
    let tabs = document.querySelectorAll('.tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.transform = 'translateY(0)';
      });
    }
  }

}
