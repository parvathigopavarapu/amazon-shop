import { Component, Input } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'header-main',
  templateUrl: 'header-main.html'
})

export class HeaderPart {

  @Input('title') title: any;

  @Input('logo') logo: any;

  constructor(public nav: NavController,
    public view: ViewController
  ) {

  }

}