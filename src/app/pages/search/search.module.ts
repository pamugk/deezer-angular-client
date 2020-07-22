import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search.component';
import { OverviewComponent } from './overview/overview.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { TracksComponent } from './tracks/tracks.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { RadiosComponent } from './radios/radios.component';
import { ChannelsComponent } from './channels/channels.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SearchComponent,

    OverviewComponent,
    
    AlbumsComponent,
    ChannelsComponent,
    ArtistsComponent,
    PlaylistsComponent,
    ProfilesComponent,
    RadiosComponent,
    TracksComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
