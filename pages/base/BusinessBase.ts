import { IDeliveryZone, IBusinessUser, IOpeningHour, Pharmacy } from 'mediserve-services';
import { SettingsBase } from './SettingsBase';
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { IAddress, ServiceProvider, execute, IBusiness, IService, IHighlight } from 'mediserve-services';


@Injectable()
export class BusinessBase extends SettingsBase {
    business: IBusiness
    businessId: string;
    address: IAddress;
    highlight: IHighlight;
    service: IService;
    location: any;

    userId: string;
    user: IBusinessUser;
    users: any = [];

    deliveryZoneId: string;
    deliveryZone: IDeliveryZone;
    deliveryZones: any = [];


    openingHourId: string;
    openingHour: IOpeningHour;
    openingHours: any = [];

    pharmacyList: any = [];
    pharmacy: Pharmacy;


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider

    ) {
        super(navCtrl, navParams, svcsCtrl);
    }

    initBusiness() {
        console.log("Storing pharmacy")
        console.log(this.business)
        this.svcsCtrl.pharmacyService.setPharmacy(this.business).then((data) => {
            this.gotoRegistrationStep2();
        });
    }

    setBusiness() {
        this.svcsCtrl.pharmacyService.setPharmacy(this.business).then((data) => {
            this.gotoRegistrationStep3();
        });;
    }

    getBusiness() {
        console.log("getting business");
        let business = this.svcsCtrl.pharmacyService.getPharmacy()
        console.log("pharmacy" + JSON.stringify(business))
        if (business != null) {
            this.business = business;
        }
    }

    registerPharmacy() {
        this.message = "Register Pharmacy";
        execute(this.svcsCtrl.pharmacyService.registerPharmacy(this.business))
            .success((data) => {
                this.gotoRegisteredHome();
            })
            .failure((error) => {
                this.response = error.message
            })
    }

    async listPharmacy(): Promise<any> {
        this.message = "Getting Business Profile";
        await execute(this.svcsCtrl.pharmacyService.listPharmacy()).success((response) => {
            this.pharmacyList = response.data;
            this.message = response.message;
            this.response = JSON.stringify(response, null, 4);
            console.log(this.pharmacyList)
        })
    }

    async processPhamacyList() {
        await execute(this.svcsCtrl.pharmacyService.listPharmacy()).success((response) => {
            console.log("Success block")
            this.pharmacyList = response.data;
            this.message = response.message;
            this.response = JSON.stringify(response, null, 4);
            console.log(response);
            if (this.pharmacyList != null && this.pharmacyList.length == 0) {
                console.log("gotoRegisterHome()")
                this.gotoRegisterHome();
            } else if (this.pharmacyList != null && this.pharmacyList.length == 1) {
                this.pharmacy = this.pharmacyList[0]
                this.svcsCtrl.pharmacyService.setSelectedPharmacy(this.pharmacy)
                this.gotoRegisteredHome();
            } else {
                console.log("processPhamacyList::Dead end")
            }
        }).failure((response) => {
            console.log("Failure block")
            console.log(response);
        });
    }

    selectPharmacy(pharmacy) {
        this.svcsCtrl.pharmacyService.setSelectedPharmacy(pharmacy)
        this.gotoRegisteredHome();
    }

    async readPharmacy() {
        this.message = "Getting Pharmacy Profile";
        await execute(this.svcsCtrl.pharmacyService.readPharmacy()).success((response) => {
            let business = response.data;
            console.log("read pharmacy" + JSON.stringify(business))
            this.business = Object.assign({}, business);
        })
    }

    updatePharmacy() {
        this.message = "updating Pharmacy Profile";
        execute(this.svcsCtrl.pharmacyService.updatePharmacy(this.business)).success((response) => {
            let business = response.data;
            this.business = Object.assign({}, business)
            setTimeout(() => {
                this.gotoBusinessProfileView();
            }, 1000);
        }).failure((data) => {
            this.response = data.message;

        })
    }

    //delivery zone
    createDeliveryZone() {
        this.message = "Creating Deliveryzone";
        execute(this.svcsCtrl.pharmacyService.createDeliveryZone(this.deliveryZone)).success((response) => {
            console.log(JSON.stringify(response))
            setTimeout(() => {
                this.gotoDeliveryZonesList();
            }, 1000);
        }).failure((data) => {
            this.response = data.message;

        })
    }

    listDeliveryZone() {
        this.message = "Listing Deliveryzones";
        execute(this.svcsCtrl.pharmacyService.listDeliveryZone()).success((response) => {
            console.log(JSON.stringify(response))
            let deliveryZones = response.data;
            this.deliveryZones = JSON.parse(JSON.stringify(deliveryZones))
            console.log("deliveryZones: " + JSON.stringify(this.deliveryZones))
        })
    }

    readDeliveryZone() {
        this.message = "Getting Deliveryzone";
        execute(this.svcsCtrl.pharmacyService.readDeliveryZone(this.deliveryZoneId)).success((response) => {
            console.log(JSON.stringify(response))
            let deliveryZone = response.data;
            this.deliveryZone = JSON.parse(JSON.stringify(deliveryZone))
            console.log("deliverZone" + JSON.stringify(this.deliveryZone))
        })
    }

    updateDeliveryZone() {
        this.message = "Update DeliveryZone";
        execute(this.svcsCtrl.pharmacyService.updateDeliveryZone(this.deliveryZoneId, this.deliveryZone)).success((response) => {
            let deliveryZone = response.data;
            this.deliveryZone = Object.assign({}, deliveryZone)
            console.log("deliverZone edit" + JSON.stringify(this.deliveryZone))
            setTimeout(() => {
                this.gotoDeliveryZonesList();
            }, 1000);
        }).failure((data) => {
            this.response = data.message;
        })
    }

    deleteDeliveryZone() {
        this.message = "Delete DeliveryZone";
        execute(this.svcsCtrl.pharmacyService.deleteDeliveryZone(this.deliveryZoneId)).success((response) => {
            setTimeout(() => {
                this.listDeliveryZone();
            }, 800);
        }).failure((data) => {
            this.response = data.message;

        })
    }

    //opening hours
    createOpeningHour() {
        this.message = "Creating Deliveryzone";
        execute(this.svcsCtrl.pharmacyService.createOpeningHour(this.openingHours)).success((response) => {
            console.log(JSON.stringify(response))
            setTimeout(() => {
                this.gotolistOpeningHour();
            }, 1000);
        }).failure((data) => {
            this.response = data.message;

        })
    }

    listOpeningHour() {
        this.message = "Listing Deliveryzones";
        execute(this.svcsCtrl.pharmacyService.listOpeningHour()).success((response) => {
            console.log(JSON.stringify(response))
            let openingHours = response.data;
            this.openingHours = JSON.parse(JSON.stringify(openingHours))
            console.log("opening hours" + JSON.stringify(this.openingHours))
        })
    }

    readOpeningHour() {
        this.message = "Getting OpeningHour";
        execute(this.svcsCtrl.pharmacyService.readOpeningHour(this.openingHourId)).success((response) => {
            console.log(JSON.stringify(response))
            let openingHours = response.data;
            this.openingHours = JSON.parse(JSON.stringify(openingHours))
            console.log("opening hours" + JSON.stringify(this.openingHours))
        })
    }

    updateOpeningHour() {
        this.message = "Update OpeningHour";
        execute(this.svcsCtrl.pharmacyService.updateOpeningHour(this.openingHourId, this.openingHours)).success((response) => {
            let openingHours = response.data;
            this.openingHours = Object.assign({}, openingHours)
            console.log("deliver edit" + JSON.stringify(this.openingHours))
            setTimeout(() => {
                this.gotolistOpeningHour();
            }, 1000);
        }).failure((data) => {
            this.response = data.message;
        })
    }

    deleteOpeningHour() {
        this.message = "Deleting Opening Hours";
        execute(this.svcsCtrl.pharmacyService.deleteOpeningHour(this.openingHourId)).success((data) => {
            console.log(JSON.stringify(data))
            setTimeout(() => {
                this.gotolistOpeningHour();
            }, 1000);
        }).failure((data) => {
            this.response = data.message;
        })
    }

    //user
    createUser() {
        this.message = "Creating User";
        execute(this.svcsCtrl.pharmacyService.createUser(this.user)).success((response) => {
            console.log("create user" + JSON.stringify(response))
            setTimeout(() => {
                this.gotoUserList();
            }, 1000);
        }).failure((data) => {
            this.response = data.message;
        })
    }

    listUser() {
        this.message = "Listing Users";
        execute(this.svcsCtrl.pharmacyService.listUser()).success((response) => {
            console.log(JSON.stringify(response))
            let users = response.data;
            this.user = JSON.parse(JSON.stringify(users))
            console.log("users" + JSON.stringify(this.user))
        })
    }

    readUser() {
        this.message = "Getting User";
        execute(this.svcsCtrl.pharmacyService.readUser(this.userId)).success((response) => {
            console.log(JSON.stringify(response))
            let user = response.data;
            this.user = JSON.parse(JSON.stringify(user))
            console.log("read user" + JSON.stringify(this.user))
        })
    }

    updateUser() {
        this.message = "Update User";
        execute(this.svcsCtrl.pharmacyService.updateUser(this.userId, this.user)).success((response) => {
            let user = response.data;
            this.user = Object.assign({}, user)
            console.log("update user" + JSON.stringify(this.user))
            setTimeout(() => {
                this.gotoUserList();
            }, 1000);
        }).failure((data) => {
            this.response = data.message;
        })
    }

    deleteUser() {
        this.message = "Delete User";
        execute(this.svcsCtrl.pharmacyService.deleteUser(this.userId)).success((data) => {
            console.log(JSON.stringify(data))
            setTimeout(() => {
                this.gotoUserList();
            }, 1000);
        }).failure((data) => {
            this.response = data.message;
        })
    }

    gotoBusinessProfileEdit(businessId) {
        this.navCtrl.push('businessSettingsEdit', { businessId: businessId })
    }

    gotoBusinessProfileView() {
        this.navCtrl.push('businessSettings').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }

    gotoDeliveryZonesList() {
        this.navCtrl.push('deliveryzones').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }

    gotoAddDeliveryZone() {
        this.navCtrl.push('deliveryzonesAdd')

    }

    gotolistOpeningHour() {
        this.navCtrl.push('openinghours').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }

    gotoUserList() {
        this.navCtrl.push('userList').then(() => {
            const startIndex = this.navCtrl.getActive().index - 2;
            this.navCtrl.remove(startIndex, 2);
        });
    }

    gotoRegisterHome() {
        console.log("Go to register")
        this.navCtrl.push('ebusinessHomeRegister')
    }

    gotoRegisteredHome() {
        console.log("Go to registered")
        this.navCtrl.push('ebusinessHomeRegistered')
    }

    gotoRegistrationStep2() {
        console.log("Go to Step2")
        this.navCtrl.push('ebusinessRegistrationStep2')
    }

    gotoRegistrationStep3() {
        console.log("Go to Step2")
        this.navCtrl.push('ebusinessRegistrationStep3')
    }

    gotoHomePage() {
        this.navCtrl.push('pharmacyIndex')
    }

}