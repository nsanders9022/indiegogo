import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from '../campaign.model';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.css'],
  providers: [CampaignsService]
})
export class EditCampaignComponent implements OnInit {
  @Input() selectedCampaign;

  constructor(private campaignsService: CampaignsService) { }

  ngOnInit() {
  }

  beginUpdatingCampaign(campaignToUpdate) {
    this.campaignsService.updateCampaign(campaignToUpdate);
  }

}
