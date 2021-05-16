import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { DataModule } from '../data/data.module';
import { RadioListComponent } from './radio-list/radio-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackTableComponent } from './track-table/track-table.component';

import { Carousel } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AlbumListComponent,
    ArtistListComponent,
    PlaylistListComponent,
    RadioListComponent,
    SpinnerComponent,
    TrackListComponent,
    TrackTableComponent,
    UserListComponent,

    Carousel
  ],
  imports: [
    CommonModule,
    DataModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    AlbumListComponent,
    ArtistListComponent,
    PlaylistListComponent,
    RadioListComponent,
    SpinnerComponent,
    TrackListComponent,
    TrackTableComponent,
    UserListComponent,

    Carousel
  ]
})
export class ComponentsModule { }
