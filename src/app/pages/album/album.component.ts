import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Album } from 'src/app/data/album';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/data/comment';
import { DeezerService } from 'src/app/deezer.service';
import { switchMap } from 'rxjs/operators';
import { Artist } from 'src/app/data/artist';
import { SearchResult } from 'src/app/data/search-result';
import { Track } from 'src/app/data/track';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id: number;
  album: Album;
  disks: Map<number, Array<Track>>;
  artistDiscography: Array<Album>;
  artistRelated: Array<Artist>;

  constructor(
    private changeDetection: ChangeDetectorRef,
    private route: ActivatedRoute,
    private deezer: DeezerService
  ) {
    this.disks = new Map<number, Array<Track>>();
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
    .subscribe(data=> {
      this.id = Number.parseInt(data);
      this.deezer.requestAlbum(this.id, this.recieveAlbum.bind(this));
    });
  }

  private recieveAlbum(album:Album):void {
    this.album = album;

    this.deezer.requestAlbumTracks(
      this.id,
      this.recieveTracks.bind(this),
      { limit: album.nb_tracks }
    );

    this.deezer.requestArtistDiscography(
      album.artist.id,
      (discography) => {
        discography.data.forEach(album => album.artist = this.album.artist);
        this.artistDiscography = discography.data;
        this.changeDetection.detectChanges();
      },
      { limit: 10 }
    );

    this.deezer.requestArtistRelated(
      album.artist.id,
      (related) => {
        this.artistRelated = related.data;
        this.changeDetection.detectChanges();
      },
      { limit: 10 }
    );
  }

  private recieveTracks(tracks:SearchResult<Track>):void {
    tracks.data.forEach(
      track => {
        if (!this.disks.has(track.disk_number))
          this.disks.set(track.disk_number, new Array<Track>());
        this.disks.get(track.disk_number).push(track);
      }
    );
    this.changeDetection.detectChanges();
  }
}
