import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';
import { Base } from '../../base/Base';
import { ServiceProvider } from 'mediserve-services';

@IonicPage({
  segment: 'pharmacy'
})

@Component({
  selector: 'page-pharmacy-index',
  templateUrl: 'pharmacy-index.html'
})

export class pharmacyIndex extends Base {

  activeTab;
  name;
  tab1Root: any = 'pharmacyHomeIndex';
  tab2Root: any = 'pharmacyOrderIndex';
  tab3Root: any = 'pharmacyAccountIndex';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public svcsCtrl: ServiceProvider
  ) {
    super(navCtrl, navParams, svcsCtrl);
    this.activeTab = this.navParams.get('tabIndex');
    this.name = this.navParams.data; 
  }

  doChange(event) {
  }
  
}