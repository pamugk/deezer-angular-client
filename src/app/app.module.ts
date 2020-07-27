import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AccountComponent } from './pages/account/account.component';
import { AlbumComponent } from './pages/album/album.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './pages/channel/channel.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { ProfileModule } from './pages/profile/profile.module';
import { SearchModule } from './pages/search/search.module';

import { DataModule } from './data/data.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,

    AccountComponent,
    AlbumComponent,
    ArtistComponent,
    ChannelComponent,
    ChannelsComponent,
    HomeComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    
    ComponentsModule,

    AppRoutingModule,
    DataModule,
    ProfileModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
