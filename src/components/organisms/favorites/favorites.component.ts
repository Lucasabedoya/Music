import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuariosService } from 'src/services/usuarios.service';
import { AppState } from 'src/store/app.state';
import { selectCurrentFavorites, selectCurrentProfile } from 'src/store/selectors/counter.selector';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoritesTracks$: [] | any;

  constructor(private usuariosService: UsuariosService, private store: Store<AppState>) {
    this.store.select(selectCurrentFavorites).subscribe(cb => {this.favoritesTracks$ = cb; console.log(this.favoritesTracks$)});
  }  

  msToMinutes(millis = 237253) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
  }

  ngOnInit(): void {
  
  }

  removeFavorite(ids: string, i: number): void{

    this.usuariosService.removeFavoriteTrack( { ids: ids } )
    .subscribe(cb => {});

  };

}
