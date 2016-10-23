import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
declare var google: any;

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html'
})
export class SpeakerDetailPage {
  speaker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data);
    this.speaker = this.navParams.data;
  }    
}
