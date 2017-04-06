import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { CampaignsService } from '../campaigns.service';
import { Router } from '@angular/router';
import { Campaign } from '../campaign.model';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
  providers: [CampaignsService]
})
export class CampaignsComponent implements OnInit {

  campaigns: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private campaignsService: CampaignsService) { }

  ngOnInit() {
    this.campaigns = this.campaignsService.getCampaigns();


  }

  //clickedCampaign is not a Campaign datatype because it comes from firebase and it is a FirebaseObjectObservable
  goToDetailPage(clickedCampaign) {
    this.router.navigate(['campaigns', clickedCampaign.$key]);
  };


}
