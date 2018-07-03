import { Component, Input } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { Profile } from 'mediserve-services';

@Component({
  selector: 'profile-details',
  templateUrl: 'profile-details.html'
})

export class ProfileDetails {

  @Input('profile') profile: Profile;

  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController
  ) {

  }

  uploadPhoto() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Photo',
      buttons: [
        {
          text: 'Gallery',
          handler: () => {
            console.log('Photo Choosed');
          }
        }, {
          text: 'Camera',
          handler: () => {
            console.log('Photo Choosed');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}