import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'pharmacy-navigation-top',
  templateUrl: 'pharmacy-navigation-top.html'
})

export class NavigationLinks {

  @Input('navList') navList: any;

  constructor(public navCtrl: NavController) {
    
  }

  gotoPage(page, index) {
    if (index == 1) {
      this.navCtrl.parent.select(index);
    }
    else {
      this.navCtrl.push(page)
    }
  }

}