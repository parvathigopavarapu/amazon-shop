import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
  defaultHistory: ['orderList']
})

@Component({
  selector: 'page-quotation-create',
  templateUrl: 'quotation-create.html'
})

export class quotationCreate {

  title: string;
  no: number;
  medicine: any;
  rate: any;
  qty: any;
  amount: any;

  order: any = [];
  drugList: any = [];

  constructor(
    public navCtrl: NavController,
    public navPrams: NavParams
  ) {
    this.title = "Create Quote";

    this.order = this.navPrams.get('order')
  }

  create(no, medicine, rate, qty, amount) {
    this.drugList.push({
      no: this.no,
      medicine: this.medicine,
      rate: this.rate,
      qty: this.qty,
      amount: this.amount
    })
  }

  movetoquatationdetailspage() {
    this.navCtrl.push('orderDetailsNew')
  }

}