import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProfileModule } from './profile.module';
import { OverviewComponent } from './overview/overview.component';
import { TracksComponent } from './tracks/tracks.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';

export const routes: Routes = [
    { path: '', component: OverviewComponent },
    { path: 'tracks', component: TracksComponent },
    { path: 'playlists', component: PlaylistsComponent },
    { path: 'tracks', component: AlbumsComponent },
    { path: 'tracks', component: ArtistsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ProfileModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
