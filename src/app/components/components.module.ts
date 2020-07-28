import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { DataModule } from '../data/data.module';
import { RadioListComponent } from './radio-list/radio-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AlbumListComponent,
    ArtistListComponent, 
    PlaylistListComponent,
    RadioListComponent,
    SpinnerComponent,
    UserListComponent,
    CommentListComponent
  ],
  imports: [
    CommonModule,
    DataModule,
    RouterModule
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
