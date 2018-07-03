import { ServiceProvider } from 'mediserve-services';
import { BusinessBase } from './../../base/BusinessBase';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { BusinessUser } from 'mediserve-services';

@IonicPage({
    defaultHistory: ['userList'],
    segment: "user-edit/:userId"
})

@Component({
    selector: 'page-user-edit',
    templateUrl: 'user-edit.html'
})

export class userEdit extends BusinessBase {

    tabIndex: string = "0";

    constructor(public navCtrl: NavController, public navParams: NavParams, public svclCtrl: ServiceProvider) {
        super(navCtrl, navParams, svclCtrl);
        this.title = "User Edit";
        this.user = new BusinessUser();
        this.userId = this.navParams.get("userId")
    }

    ionViewDidLoad() {
        this.readUser();
    }

    save() {
        this.updateUser();
    }

    cancel() {
        this.navCtrl.push('userList')
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