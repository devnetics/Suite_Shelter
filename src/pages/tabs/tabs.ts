import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab  
  tab1Root: any = MapPage;
  tab2Root: any = AboutPage;
  tab3Root: any = SpeakerListPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
