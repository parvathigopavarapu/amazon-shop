import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { BusinessBase } from "../../base/BusinessBase";
import { ServiceProvider, BusinessUser } from "mediserve-services";

@IonicPage({
    defaultHistory: ['userList']
})

@Component({
    selector: 'page-user-add',
    templateUrl: 'user-add.html'
})

export class userAdd extends BusinessBase {

    tabIndex: string = "0";

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl)
        this.title = 'User Add'
        this.user = new BusinessUser();
    }

    save() {
        this.createUser()
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