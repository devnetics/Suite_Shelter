import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { ShelterDetailsPage } from '../pages/shelter-details/shelter-details';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { ShelterListPage } from '../pages/shelters/shelters';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    ShelterListPage,
    ShelterDetailsPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage
  ],
  imports: [
    IonicModule.forRoot(ConferenceApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,        
    ShelterListPage,
    ShelterDetailsPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage
  ],
  providers: [ConferenceData, UserData, Storage]
})
export class AppModule {}
