import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { UsuariosService } from 'src/services/usuarios.service';
import { currentTrackUrl, loadedCurrentPlaylist } from 'src/store/actions/counter.actions';
import { AppState } from 'src/store/app.state';
import {  selectCurrentFavorites, selectPlaylists } from 'src/store/selectors/counter.selector';

@Component({
  selector: 'your-playlists',
  templateUrl: './your-playlists.component.html',
  styleUrls: ['./your-playlists.component.scss']
})
export class YourPlaylistsComponent implements OnInit {

  url: string ;
  playlists$: Observable<any> = new Observable();
  token: string | null;
  tracks?: any;
  currentFavorites: { items: [], total: number } | any;
  track: any;

  constructor( private store: Store<AppState>, private usuariosService: UsuariosService) { 
    this.url = "https://api.spotify.com/v1/playlists/7sKHUXC1mRSb61LhjBI77e/tracks"
    this.token = localStorage.getItem('token');
    this.playlists$  = this.store.select(selectPlaylists);
    this.store.select(selectCurrentFavorites).subscribe(cb => {
      this.currentFavorites = cb;
      this.currentFavorites = this.currentFavorites.items;
    })
  }

  ngOnInit(): void {
    this.getPlaylistData(this.url)
  }
   
  changeCurrentPlaylist( currentPlaylist: any, currentUrl: string ){
    this.store.dispatch(loadedCurrentPlaylist(
      { currentPlaylist: currentPlaylist }
    ));

    this.getPlaylistData(currentUrl)
    
  }

  private _getPlaylistData = (url: string) => {

    this.usuariosService.obtenerCurrentTracks(url)
      .subscribe(response => {
        this.tracks = response;
        let favorites: any = [] 
        const { items } = this.tracks;

        const currentFavorites = items.map(({ added_at, track }: { added_at: string; track: any; }) => {

          this.currentFavorites.map((item: any) => {

            if (track.id === item.track.id) {
              favorites = [...favorites, track.id]         
            } 
            
          });

          let tr: any = {
            tracks: track,
            added_at: added_at,
          }

          favorites.map((cb: any) => {
            if (track.id !== cb) {
              tr = {...tr, favorite: false}
            }else {
              tr = {...tr, favorite: true}
            }
          })

          return tr

        });

        this.store.dispatch(currentTrackUrl(
          { currentTracks: currentFavorites }
        ));
      });
  };

  public get getPlaylistData() {
    return this._getPlaylistData;
  }
  public set getPlaylistData(value) {
    this._getPlaylistData = value;
  }
  
}
