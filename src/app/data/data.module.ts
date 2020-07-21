import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Album } from './album';
import { Artist } from './artist';
import { Chart } from './chart';
import { Comment } from './comment';
import { Editorial } from './editorial';
import { Genre } from './genre';
import { Infos } from './infos';
import { Options } from './options';
import { Playlist } from './playlist';
import { Radio } from './radio';
import { Search } from './search';
import { Track } from './track';
import { User } from './user';

@NgModule({
  declarations: [
    Album, Artist,
    Chart, Comment,
    Editorial, Genre,
    Infos, Options, 
    Playlist, Radio, 
    Search, Track, User
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Album, Artist,
    Chart, Comment,
    Editorial, Genre,
    Infos, Options, 
    Playlist, Radio, 
    Search, Track, User
  ],
})
export class DataModule { }
