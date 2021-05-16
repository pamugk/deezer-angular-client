import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Artist } from 'src/app/data/artist';
import { Album } from 'src/app/data/album';
import { Track } from 'src/app/data/track';
import { ActivatedRoute } from '@angular/router';
import { DeezerService } from 'src/app/deezer.service';
import { switchMap } from 'rxjs/operators';
import { Playlist } from 'src/app/data/playlist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  id: number;
  artist: Artist;
  topTracks: Array<Track>;
  artistDiscography: Array<Album>;
  related: Array<Artist>;
  relatedPlaylists: Array<Playlist>;

  constructor(
    private changeDetection: ChangeDetectorRef,
    private route: ActivatedRoute,
    private deezer: DeezerService
  ) { 
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
    .subscribe(data=> {
      this.id = Number.parseInt(data);
      this.deezer.requestArtist(this.id, this.recieveArtist.bind(this));
    });
  }

  private recieveArtist(artist: Artist) {
    this.artist = artist;

    this.deezer.requestArtistTopTracks(
      artist.id,
      (topTracks) => {
        this.topTracks = topTracks.data;
        this.changeDetection.detectChanges();
      }
    )

    this.deezer.requestArtistDiscography(
      artist.id, 
      (discography) => {
        discography.data.forEach(album => album.artist = this.artist);
        this.artistDiscography = discography.data;
        this.changeDetection.detectChanges();
      },
      { limit: 10 }
    );

    this.deezer.requestArtistRelated(
      this.artist.id,
      (related) => {
        this.related = related.data;
        this.changeDetection.detectChanges();
      },
      { limit: 3 }
    );

    this.deezer.requestArtistRelatedPlaylists(
      this.artist.id,
      (related) => {
        this.relatedPlaylists = related.data;
        this.changeDetection.detectChanges();
      },
      { limit: 3 }
    );
  }

}
