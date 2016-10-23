import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActionSheet, ActionSheetController, Config, NavController } from 'ionic-angular';
// import { InAppBrowser } from 'ionic-native';

import { ConferenceData } from '../../providers/conference-data';
import { ShelterDetailsPage } from '../shelter-details/shelter-details';


@Component({
  selector: 'page-shelter-list',
  templateUrl: 'shelters.html'
})
export class ShelterListPage {
  actionSheet: ActionSheet;
  search = false;
  shelters = [];
  queryText: string;

  constructor(public http: Http, public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public confData: ConferenceData, public config: Config) {
    // confData.getSpeakers().then(speakers => {
    //   this.speakers = speakers;
    // });
  }

  searchShelter() {
    this.http.get('http://localhost:8080/shelters?name=' + this.queryText).subscribe( res => {
      this.shelters = res.json();
    });
  }

  showSearch() {
    this.search = !this.search;
  }  

  goToSpeakerDetail(shelter: any) {
    this.navCtrl.push(ShelterDetailsPage, shelter);
  }

  goToSpeakerTwitter(speaker) {
    // TODO FIX
    // let app = new InAppBrowser(`https://twitter.com/${speaker.twitter}`, '_blank');
    // app.on('loadstop').subscribe(
    //   (ev) => {
    //     console.log('InAppBrowser loaded!');
    //   });
  }

  openShelterShare(shelter) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share ' + shelter.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(shelter.location);
            if (window['cordova'] && window['cordova'].plugins.clipboard) {
              window['cordova'].plugins.clipboard.copy(shelter.location);
            }
          }
        },
        {
          text: 'Share via ...',
          handler: () => {
            console.log('Share via clicked');
          }
        },
        {
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

  openContact(shelter) {
    let mode = this.config.get('mode');

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact with ' + shelter.name,
      buttons: [
        {
          text: `Email ( ${shelter.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + shelter.email);
          }
        },
        {
          text: `Call ( ${shelter.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + shelter.profile.phone);
          }
        }
      ]
    });

    actionSheet.present();
  }
}