import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { OverviewComponent } from './overview/overview.component';
import { TracksComponent } from './tracks/tracks.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { PlaylistsComponent } from './playlists/playlists.component';

@NgModule({
  declarations: [
    ProfileComponent,
    OverviewComponent,
    TracksComponent,
    AlbumsComponent,
    ArtistsComponent,
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
