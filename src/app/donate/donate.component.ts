import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../campaign.model';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  providers: [CampaignsService]
})

export class DonateComponent implements OnInit {
  @Input() selectedCampaign;

  constructor(private campaignsService: CampaignsService) { }

  ngOnInit() {
  }


  submitDonate(amount: string) {
    this.campaignsService.donate(this.selectedCampaign, amount);
  }

}
