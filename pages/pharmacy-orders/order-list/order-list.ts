import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
// import {TagInputComponent} from 'ng2-tags/ng2-tags';

@IonicPage({
    segment: 'order-list/:orderStatus',
    defaultHistory: ['pharmacyOrderIndex']
})

@Component({
    selector: 'page-order-list',
    templateUrl: 'order-list.html'
})

export class orderList {

    orderStatus: any;
    title: any;
    
    order: any = [
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            dates:'2016-03-12',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'new'
        },
       {
            id: '4234536459842367',
            orderNumber: 'As24235',
            dates:'2016-03-12',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'new'
        },
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'quoted'
        },
         {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'quoted'
        },
         {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'quoted'
        },
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'confirmed'
        },
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'confirmed'
        },
       {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'confirmed'
        },
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'prepared'
        },
       {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'prepared'
        },
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'prepared'
        },
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'outForDelivery'
        },
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'outForDelivery'
        },
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'outForDelivery'
        },
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'delivered'
        },
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'delivered'
        },
        
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'rejected'
        },
        {
            id: '4234536459842367',
            orderNumber: 'As24235',
            contact: {
                contactId: '547587',
                phoneNumber: '9542037170',
                contactName: 'Parvathi',
                patient: {
                    patientId: '56464562',
                    patientName: 'paru',
                    patientAge: 'string',
                    patientMob: 'string',
                    patientGender: 'string'
                }
            },
            prescriptions: [{
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre.jpg'
            },
            {
                prescriptionId: '49791241',
                prescriptionName: 'KSgfyt',
                prescriptionImage: 'picphoto',
                prescriptionImageUrl: '../../../assets/imgs/pre2.jpg'
            }],
            orderPreference: 'high',
            deliveryAddress: {
                address: 'home',
                area: 'MR Layout',
                city: 'Bangalore',
                pincode: '560049'
            },
            orderNotes: 'Can you call me, so that i can tell u the required medicines ',
            quotes: [{
                quoteId: '5648456',
                quoteName: 'kahyhhfg',
                quoteImage: 'yhjty',
                quoteImageUrl: '../../../assets/imgs/pre.jpg',
                quotePrice: 1204,
                quoteDiscount: 123,
                quoteTotal: 1000,
            },
            {
                quoteId: '5648450',
                quoteName: 'kahy7fg',
                quoteImage: 'yhjty567',
                quoteImageUrl: '../../../assets/imgs/pre2.jpg',
                quotePrice: 1235,
                quoteDiscount: 123,
                quoteTotal: 1000,
            }],
            orderDeliveryCharge: 100,
            orderTotal: 290,
            orderStatus: 'rejected'
        },
      
    ]
    constructor(
        public navCtrl: NavController,
        public navPrams: NavParams
    ) {
        this.orderStatus = this.navPrams.get('orderStatus');
        this.title = this.orderStatus + ' ' + 'Orders'
    }

}