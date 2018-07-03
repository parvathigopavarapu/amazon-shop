import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class PharmacyApp {
  index1: number[];
  component3: any;

  rootPage: any = 'devicecheck'
  // @ViewChild(Nav) nav: Nav;

  testInput: string = "Hello world input";
  testInput1: string = "stralenhoop bangalore";
  titles: any;
  subTitle: any;
  badge: any;
  account = []
  profile: any;
  user: any;
  history: any;
  components: any;
  Component3: any;
  components1: any;
  status: any;
  index: any;
  subMenu = [];
  tabIndex: number;
  pages: Array<{ title: string, component: any, index: any }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public app: App) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  clickRecieved($event) {
    console.log("clickRecieved Event: " + $event);
    this.testInput += " " + $event;
  }

  clickedOutside($event) {
    console.log("clickOutside Event: " + $event);
    this.testInput = "Clicked Outside Event: " + $event;
  }
}

