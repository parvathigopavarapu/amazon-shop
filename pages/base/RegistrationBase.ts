import { Injectable } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { execute, Profile, IProfile, IAddress, INotification, Notification, Address, ServiceProvider } from 'mediserve-services';
import { Base } from './Base';

@Injectable()
export class RegistrationBase extends Base {

    countryCode: string = "0091";
    phoneNumber: string;
    otp: string;
    pinRepeat: string;

    profile: IProfile;
    address: IAddress;
    notification: INotification;

    profileVerify: IProfile;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);

    }

    verifyProfile() {
        this.message = "Verifying Profile";
        execute(this.svcsCtrl.signinService.verifyProfile()).success((data) => {
            console.log(data);
            console.log("Go to Signin")
            this.gotoSignin();
        }).failure((data) => {
            console.log(data);
            console.log("Go to Register: status " + data.status)
            this.message = data.message;
            if (data.status == 0) {
                this.gotoError();
            } else if (data.status == 401) {
                this.gotoSignin();
            } else {
                this.gotoDeviceRegister();
            }
        })
    }

    getPhonenumber() {
        this.readPhonenumber(true);
    }

    readPhonenumber(redirect: boolean) {
        this.message = "Getting phone details";
        this.phoneNumber = this.svcsCtrl.storageService.get("phone");
        if (!this.phoneNumber && redirect) this.gotoDeviceRegister();
        if (!this.phoneNumber || this.phoneNumber == '') {
            this.phoneNumber = "8884913527";
        }
        this.countryCode = this.svcsCtrl.storageService.get("countryCode");
        if (!this.countryCode || this.countryCode == '') {
            this.countryCode = "0091";
        }
    }

    getProfile() {
        this.message = "Getting profile";
        this.profile = new Profile();
        this.address = new Address();
        this.notification = new Notification();

        this.profileVerify = new Profile();


        if (!this.svcsCtrl.storageService.get("deviceToken")) {
            this.gotoDeviceRegister();
        };
        let profileData = this.svcsCtrl.storageService.get("profile");
        if (profileData) {
            this.profile = Object.assign({}, profileData);
            this.address = Object.assign({}, profileData.address);
            this.notification = Object.assign({}, profileData.notification);
        }

        let profileVerify = this.svcsCtrl.storageService.get("profileVerify");
        if (profileVerify) {
            this.profileVerify = Object.assign({}, profileVerify);
            console.log(this.profileVerify);
        }
    }

    initProfile() {
        this.message = "Setting up profile";
        this.svcsCtrl.signinService.initProfile(this.profile).then((data) => {
            console.log(data);
            this.gotoProfileSetupStep2();
        });
    }

    setProfile() {
        this.message = "Storing profile";
        this.profile.address = this.address;
        this.notification = {
            email: true,
            text: true,
            newsLetter: true
        }
        this.profile.notication = this.notification;
        this.svcsCtrl.signinService.setProfile(this.profile).then((data) => {
            console.log(data);
            this.gotoProfileSetupStep3();
        });
    }

    setVerifyProfile() {
        this.message = "Storing verification details";
        this.svcsCtrl.signinService.setVerifyProfile(this.profileVerify).then((data) => {
            console.log(data);
            this.gotoProfileVerifyStep2();
        });
    }


    registerDevice() {
        this.message = "Registering device";
        execute(this.svcsCtrl.deviceService.register(this.countryCode, this.phoneNumber))
            .success((data) => {
                this.gotoDeviceVerify();
            })
            .failure((error) => {
                this.response = error.message
            })
    }

    confirmDevice() {
        this.message = "Confirming device";
        execute(this.svcsCtrl.deviceService.confirm(this.otp))
            .success((response) => {
                console.log(response);
                let data = response.data;
                if (data.phoneStatus && data.phoneStatus == "unregistered") {
                    this.gotoProfileSetupStep1();
                } else if (data.phoneStatus && data.phoneStatus == "registered") {
                    this.gotoProfileVerifyStep1();
                }
            })
            .failure((error) => {
                this.response = error.message
            })
    }

    signupProfile() {
        this.message = "Signing up profile";
        execute(this.svcsCtrl.signinService.signupProfile(this.profile)).success((data) => {
            console.log(data);
            this.svcsCtrl.signinService.removeProfile();
            console.log("Navigating to Signin")
            this.gotoSignin();
        });

    }

    validateProfile() {
        this.message = "Validating profile";
        execute(this.svcsCtrl.signinService.validateProfile(this.profileVerify)).success((data) => {
            console.log(data);
            this.svcsCtrl.signinService.removeVerifyProfile();
            console.log("Navigating to Signin")
            this.gotoSignin();
        }).failure((data) => {
            this.response = "Error: " + data.message;
        });

    }

    login() {
        this.message = "Logging In";
        execute(this.svcsCtrl.signinService.login(this.pinRepeat)).success((data) => {
            console.log(data);
            this.response = data.message;
            //this.navCtrl.push('signin')
            this.gotoHome();
        }).failure((data) => {
            this.response = "ERROR(remote): "
            this.response += data.error.message ? data.error.message : data.message;
        });
    }






    gotoSignin() {
        this.navCtrl.setRoot('signin')
    }

    gotoDeviceRegister() {
        this.navCtrl.setRoot('deviceregister')
    }

    gotoDeviceVerify() {
        this.navCtrl.setRoot('deviceverify')
    }

    gotoProfileSetupStep1() {
        this.navCtrl.setRoot('profilesetupStep1')
    }

    gotoProfileSetupStep2() {
        this.navCtrl.setRoot('profilesetupStep2')
    }

    gotoProfileSetupStep3() {
        this.navCtrl.setRoot('profileSetupStep3Pin')
    }

    gotoProfileVerifyStep1() {
        this.navCtrl.setRoot('profileVerifyStep1')
    }

    gotoProfileVerifyStep2() {
        this.navCtrl.setRoot('profileVerifyStep2Pin')
    }

    gotoHome() {
        //this.navCtrl.setRoot('pharmacyIndex')
        this.navCtrl.setRoot('ebusinessCheckSelect')
    }

    gotoRetry() {
        this.navCtrl.setRoot('devicecheck')
    }

    gotoError() {
        this.navCtrl.setRoot('deviceerror')
    }

}