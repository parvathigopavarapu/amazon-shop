import { Component, Input } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { IDeliveryZone } from "mediserve-services";

@Component({
  selector: 'deliveryzone-form',
  templateUrl: 'deliveryzone-form.html'
})

export class DeliveryZoneForm {

  @Input('deliveryZone') deliveryZone: IDeliveryZone;

  constructor(public nav: NavController,
    public view: ViewController
  ) {

  }

}