import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent } from './campaigns/campaigns.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CampaignsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
