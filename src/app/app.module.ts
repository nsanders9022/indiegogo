import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys'
import { AngularFireModule } from 'angularfire2';
import { CampaignComponent } from './campaign/campaign.component';
import { AdminComponent } from './admin/admin.component';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';
import { GoalAmountPipe } from './goal-amount.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CampaignsComponent,
    CampaignComponent,
    AdminComponent,
    EditCampaignComponent,
    GoalAmountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
