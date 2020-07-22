import { Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { TracksComponent } from './tracks/tracks.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { ChannelsComponent } from './channels/channels.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { RadiosComponent } from './radios/radios.component';

export const searchRoutes:Routes = [
  { path: '', component: OverviewComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'radios', component: RadiosComponent },
  { path: 'tracks', component: TracksComponent },
];
