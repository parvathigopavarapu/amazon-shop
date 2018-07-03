import { Injectable } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ServiceProvider, execute } from 'mediserve-services';

@Injectable()
export class Base {
    title: string;
    response: string;
    message: string;
    loading;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {


    }

    logout() {
        this.message = "Logging out";
        execute(this.svcsCtrl.signinService.logout()).success((data) => {
            console.log(data);
            this.response = data.message;
            //this.navCtrl.push('signout')
            window.open("/#/signout", '_self');
          }).failure((data) => { 
              this.response = "ERROR(remote): "
              this.response += data.error.message ? data.error.message : data.message;
          });
    }

    resetSession() {
        this.message = "Resetting session";
        localStorage.setItem("isLoggedIn", "false");
        localStorage.removeItem("access_token");
    }

}