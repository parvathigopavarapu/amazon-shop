import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Business } from 'mediserve-services';

@Component({
    selector: 'business-details',
    templateUrl: 'business-details.html'
})

export class BusinessDetails {

    @Input('business') business: Business;

    constructor(public navCtrl: NavController) {

    }

}