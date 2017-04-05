import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { CampaignsService } from '../campaigns.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
  providers: [CampaignsService]
})
export class CampaignsComponent implements OnInit {

  campaigns: FirebaseListObservable<any[]>;

  constructor(private router: Router, private campaignsService: CampaignsService) { }

  ngOnInit() {
    this.campaigns = this.campaignsService.getCampaigns();

  }

  // goToDetailPage(clickedCampaign: Campaign) {
  //   this.router.navigate(['campaigns', clickedCampaign.id]);
  // };


}
