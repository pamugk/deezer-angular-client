import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

import { SearchComponent } from './search.component';
import { OverviewComponent } from './overview/overview.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { TracksComponent } from './tracks/tracks.component';
import { RadiosComponent } from './radios/radios.component';
import { ChannelsComponent } from './channels/channels.component';
import { UsersComponent } from './users/users.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    SearchComponent,

    OverviewComponent,
    AlbumsComponent,
    ChannelsComponent,
    ArtistsComponent,
    PlaylistsComponent,
    RadiosComponent,
    TracksComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    SearchComponent
  ],
  providers:[
    SearchService
  ]
})
export class SearchModule { }
