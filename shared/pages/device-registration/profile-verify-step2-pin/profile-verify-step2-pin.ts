import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ServiceProvider } from 'mediserve-services';
import { RegistrationBase } from '../../../../pages/base';

@IonicPage()

@Component({
  selector: 'page-profile-verify-step2-pin',
  templateUrl: 'profile-verify-step2-pin.html'
})

export class profileVerifyStep2Pin extends RegistrationBase {

  rtitle = "Repeat Pin"
  create = "Enter 4-digit Pin"

  pinStage: number = 0;
  pin: string = "";
  pinRepeat: string = "";
  tPin: string;
  pinConfirmed: boolean = false;
  
  error: boolean;
  matrix = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public svcsCtrl: ServiceProvider
  ) {
    super(navCtrl, navParams, svcsCtrl);
    this.title = "Setup Pin";
    this.tPin = this.pin;
  }

  ionViewDidEnter() {
    this.getProfile();
    //this.menu.enable(false);
  }

  clicked(event) {
    if (event.srcElement.id == 'iback' || event.srcElement.id == "back") {
      if (this.pinStage == 1 && this.pinRepeat.length == 0) {
        this.pinStage = 0;
        this.tPin = this.pin;
      } else {
        this.tPin = this.tPin.slice(0, -1);
      }
    } else {
      if (this.tPin.length < 4)
        this.tPin += event.srcElement.id;
    }
    if (this.pinStage == 0) {
      this.pin = this.tPin;
    } else {
      this.pinRepeat = this.tPin;
    }
    if (this.pin == this.pinRepeat) {
      this.pinConfirmed = true;
    } else {
      this.pinConfirmed = false;
    }
  }

  repeatPin() {
    this.pinStage = 1;
    this.tPin = this.pinRepeat;
  }

  confirmPin() {
    console.log("Pin confirmed: " + this.pinRepeat)
    if (this.pinConfirmed) {
      this.profileVerify.pin = this.pinRepeat;
      this.validateProfile();
    } else {
      console.log("Pin not confirmed");
    }
  }

}