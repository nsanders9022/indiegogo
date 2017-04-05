import { Injectable } from '@angular/core';
import { Campaign } from './campaign.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CampaignsService {
  campaigns: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.campaigns = angularFire.database.list('campaigns');
  }

  getCampaigns() {
    return this.campaigns;
  }

  addCampaign(newCampaign: Campaign) {
    this.campaigns.push(newCampaign);
  }

  getCampaignById(campaignId: number){
    // for (var i = 0; i <= ALBUMS.length - 1; i++) {
    //   if (ALBUMS[i].id === campaignId) {
    //     return ALBUMS[i];
    //   }
    // }
  }
}
