import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CampaignsService]
})
export class AdminComponent implements OnInit {

  constructor(private campaignsService: CampaignsService) { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, description: string, reward: string, goal: number, image: string) {

    var newCampaign: Campaign = new Campaign(title, author, description, reward, goal, image);
    this.campaignsService.addCampaign(newCampaign);
    }

}
