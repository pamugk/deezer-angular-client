import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Album } from './album';
import { Artist } from './artist';
import { Channel } from './channel';
import { Mix } from './mix';
import { Playlist } from './playlist';
import { Track } from './track';
import { User } from './user';

@NgModule({
  declarations: [
    Album, Artist, 
    Channel, Mix, 
    Playlist, Track, 
    User
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Album, Artist, 
    Channel, Mix, 
    Playlist, Track, 
    User
  ],
})
export class DataModule { }
