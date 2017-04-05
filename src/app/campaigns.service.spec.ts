/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CampaignsService } from './campaigns.service';

describe('CampaignsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignsService]
    });
  });

  it('should ...', inject([CampaignsService], (service: CampaignsService) => {
    expect(service).toBeTruthy();
  }));
});
