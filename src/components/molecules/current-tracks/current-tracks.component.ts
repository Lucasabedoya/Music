import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/services/usuarios.service';
import { currentTrackUrl } from 'src/store/actions/counter.actions';
import { AppState } from 'src/store/app.state';
import { selectCurrentFavorites, selectCurrentPlaylist, selectCurrentTracks } from 'src/store/selectors/counter.selector';


@Component({
  selector: 'current-tracks',
  templateUrl: './current-tracks.component.html',
  styleUrls: ['./current-tracks.component.scss']
})
export class CurrentTracksComponent implements OnInit {

  playlist$: Observable<any> = new Observable;
  currentTracks: {
    track: []
  } | any; 
  currentFavorites: { items: [], total: number } | any;
  track: any

  constructor(private store: Store<AppState>, private usuariosService: UsuariosService) { 
    this.playlist$ = this.store.select(selectCurrentPlaylist)
    this.store.select(selectCurrentTracks).subscribe(cb => {
      this.currentTracks = cb;
    })

    this.store.select(selectCurrentFavorites).subscribe(cb => {
      this.currentFavorites = cb;
      this.currentFavorites = this.currentFavorites.items;
    })

  }

  ngOnInit(): void {
    this.currentTracks.map((item: any) => { console.log(item)})
  }

  msToMinutes(millis = 237253) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
  }

  setFavorite(ids: string, i: number): void{
    
    const index = i;
    let newTracks = {...this.currentTracks}
    newTracks[i].favorite = true;
   
    console.log(newTracks)

  }

}
