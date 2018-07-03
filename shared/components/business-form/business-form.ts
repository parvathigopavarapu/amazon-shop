import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Business } from "mediserve-services";

@Component({
    selector: 'business-form',
    templateUrl: 'business-form.html'
})

export class BusinessForm {

    @Input('business') business: Business;

    constructor(public navCtrl: NavController) {

    }

}