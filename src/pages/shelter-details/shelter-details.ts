import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-shelter-detail',
  templateUrl: 'shelter-details.html'
})
export class ShelterDetailsPage {
  session: any;

  constructor(public navParams: NavParams) {
    this.session = navParams.data;
  }
}