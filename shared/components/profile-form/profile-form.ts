import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from 'mediserve-services';

@Component({
    selector: 'profile-form',
    templateUrl: 'profile-form.html'
})

export class ProfileForm {

    @Input('profile') profile: Profile;

    constructor(public navCtrl: NavController) {

    }

}