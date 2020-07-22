import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { profileRoutes } from './pages/profile/profile-routes.module';
import { searchRoutes } from './pages/search/search-routes.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'profile', component: ProfileComponent, children: profileRoutes },
  { path: 'search/:query', component: SearchComponent, children: searchRoutes },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
