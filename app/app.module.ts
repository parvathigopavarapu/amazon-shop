import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { 
  ServiceModule, 
  ServiceProvider, 
  NoopInterceptorProvider, 
  EnsureHttpsInterceptorProvider, 
  AuthInterceptorProvider, 
  LoggingInterceptorProvider, 
  CachingInterceptorProvider, 
  HttpErrorInterceptorProvider } from 'mediserve-services'
import { PharmacyApp } from './app.component';


import { pharmacyModule } from "../pages/pharmacy/pharmacy.module";

import { pharmacyHomeModule } from "../pages/pharmacy-home/pharmacy-home.module";
import { pharmacyOrdersModule } from "../pages/pharmacy-orders/pharmacy-orders.module";
import { pharmacyAccountModule } from "../pages/pharmacy-account/pharmacy-account.module";

import { deviceRegistrationModule } from '../shared/pages/device-registration/device-registration.module';
import { profileSettingsModule } from '../shared/pages/profile-settings/profile-settings.module';
import { pharmacyBusinessModule } from '../pages/ebusiness-settings/pharmacy-business.module';
import { ebusinessRegistrationModule } from '../shared/pages/ebusiness-registration/ebusiness-registration.module';
import { chatModule } from '../shared/pages/chat/chat.module';

@NgModule({
  declarations: [
    PharmacyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceModule,
    //Generic
    deviceRegistrationModule,
    ebusinessRegistrationModule,
    profileSettingsModule,
    chatModule,
    //Pharmacy
    pharmacyModule,
    pharmacyHomeModule,
    pharmacyBusinessModule,
    pharmacyOrdersModule,
    pharmacyAccountModule,
    //Bootstrap
    IonicModule.forRoot(PharmacyApp,{tabsPlacement: 'bottom',tabsHideOnSubPages: 'false'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PharmacyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServiceProvider,
    NoopInterceptorProvider,
    EnsureHttpsInterceptorProvider,
    AuthInterceptorProvider,
    LoggingInterceptorProvider,
    CachingInterceptorProvider,
    HttpErrorInterceptorProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
