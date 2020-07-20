import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
