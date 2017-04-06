import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Campaign } from '../campaign.model';
import { FirebaseObjectObservable } from 'angularfire2';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
  providers: [CampaignsService]
})
export class CampaignComponent implements OnInit {

  campaignId: string;

  campaignToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private campaignsService: CampaignsService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.campaignId = urlParameters['id'];
    });
    this.campaignToDisplay = this.campaignsService.getCampaignById(this.campaignId);
  }
}
