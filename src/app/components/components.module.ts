import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { DataModule } from '../data/data.module';
import { RadioListComponent } from './radio-list/radio-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AlbumListComponent,
    ArtistListComponent, 
    PlaylistListComponent,
    RadioListComponent,
    SpinnerComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    DataModule
  ],
  exports: [
    AlbumListComponent,
    ArtistListComponent, 
    PlaylistListComponent,
    RadioListComponent,
    SpinnerComponent,
    UserListComponent
  ]
})
export class ComponentsModule { }
