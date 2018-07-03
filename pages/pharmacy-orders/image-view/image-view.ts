import { Component } from '@angular/core';
import { NavParams, NavController, ViewController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
    selector: 'page-image-view',
    templateUrl: 'image-view.html'
})

export class imageView {

    i: any;
    image: any;
    constructor(
        public params: NavParams,
        public navCtrl: NavController,
        public viewCtrl: ViewController
    ) {
        this.image = this.params.get('image');
    }

    gotouploadPage() {
        this.viewCtrl.dismiss()
    }
}