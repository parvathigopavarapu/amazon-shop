import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from "mediserve-services";
import { RegistrationBase } from '../../../pages/base';


@Component({
  selector: 'otp-verify-form',
  templateUrl: 'otp-verify-form.html'
})

export class OtpVerifyForm extends RegistrationBase {

  @Input('verify') verify: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public svcsCtrl: ServiceProvider
  ) {
    super(navCtrl, navParams, svcsCtrl);
    this.title = 'Verify Phone';
    this.getPhonenumber();
  }

}