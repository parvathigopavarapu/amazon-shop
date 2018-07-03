import { ServiceProvider } from 'mediserve-services';
import { BusinessBase } from './../../base/BusinessBase';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { BusinessUser } from 'mediserve-services';

@IonicPage({
    defaultHistory: ['userList'],
    segment: "user/:userId/details"
})

@Component({
    selector: 'page-user-details',
    templateUrl: 'user-details.html'
})

export class userDetails extends BusinessBase {

    tabIndex: string = "0";
    archive = "normal";
    devices: any = [];
    userId: string;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "User Details";
        this.user = new BusinessUser();
        this.userId = this.navParams.get("userId");
    }

    ionViewWillEnter() {
        this.readUser();
    }

    edit(userId) {
        this.navCtrl.push('userEdit', { userId })
    }

    ionViewWillLeave() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(0)';
            });
        }
    }
    refresh(){
        
    }

    gotoUserManagementPage() {
        this.navCtrl.push('userList')
    }

}