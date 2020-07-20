import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelsComponent } from './channels/channels.component';

@NgModule({
  declarations: [
    AccountComponent, AlbumComponent,
    ArtistComponent, ChannelComponent,
    ChannelsComponent, HomeComponent, 
    NotFoundComponent, ProfileComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountComponent, AlbumComponent,
    ArtistComponent, ChannelComponent,
    ChannelsComponent, HomeComponent, 
    NotFoundComponent, ProfileComponent,
    SearchComponent
  ]
})
export class PagesModule { }
