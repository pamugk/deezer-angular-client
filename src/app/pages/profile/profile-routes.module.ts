import { Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { TracksComponent } from './tracks/tracks.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';

export const profileRoutes: Routes = [
    { path: '', component: OverviewComponent },
    { path: 'tracks', component: TracksComponent },
    { path: 'playlists', component: PlaylistsComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'artists', component: ArtistsComponent }
];
