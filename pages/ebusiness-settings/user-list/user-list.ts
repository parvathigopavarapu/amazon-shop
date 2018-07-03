import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { BusinessBase } from "../../base/BusinessBase";
import { ServiceProvider } from "mediserve-services";

@IonicPage({
  defaultHistory: ['pharmacyBusinessIndex']
})

@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html'
})

export class userList extends BusinessBase {


  tabIndex: string = "0";

  constructor(public navParams: NavParams, public navCtrl: NavController, public svcsCtrl: ServiceProvider) {
    super(navCtrl, navParams, svcsCtrl);
    this.title = "User Management"
  }

  ionViewWillEnter() {
    this.listUser()
  }

  create() {
    this.navCtrl.push('userAdd')
  }

  view(id: string) {
    this.navCtrl.push('userDetails', {
      userId: id
    })
  }

  edit(userId: string) {
    this.navCtrl.push('userEdit', {
      userId: userId
    })
  }

  viewArchived(userId: string) {
    this.navCtrl.push('userDetails', {
      userId: userId,
      archive: "archive"
    })
  }

  deleteUsers(userId: string) {
    console.log("Delete id: " + userId);
    this.userId = userId;
    this.deleteUser();
  }

}
