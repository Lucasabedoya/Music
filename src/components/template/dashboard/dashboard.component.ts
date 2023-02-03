import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { currentFavorites, currentProfile, loadedCurrentPlaylist, loadedPlaylists, loadPlaylists } from 'src/store/actions/counter.actions';
import { selectLoading } from 'src/store/selectors/counter.selector';
import { UsuariosService } from 'src/services/usuarios.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../../app/app.component.scss'],
})
export class dashboardComponent implements OnInit{

  location: string;
  loading$: boolean | undefined;
  playlists?: any; 
  profile?: any;
  favorites?: any;

  constructor(location : Location, private store: Store<any>, private usuariosService: UsuariosService) {
    this.location = location.path(true);
    try {
      this.location = this.location.split("=")[1].split("&")[0];
      localStorage.setItem('token', this.location);
    } catch (error) {
      
    }
  }
  ngOnInit(): void {
    this.getPlaylistData();
    this.getUser();

    this.usuariosService.obtenerFavoritos()
      .subscribe(response => {
        this.favorites = response; 
        const { total, items } = this.favorites
        this.store.dispatch(currentFavorites({
          currentFavorites: { total, items }
        }))
       })

    this.store.select(selectLoading).subscribe(cb => {this.loading$ = cb});
  }

  private getPlaylistData = () => {

    this.usuariosService.obtenerPlaylists()
      .subscribe(response => {

        this.playlists = response;
        this.playlists = this.playlists.items.map(({ id, name, images, owner, description, tracks }: { id: number; name: string, images: [], owner: {}, description: string, tracks: {} }) => { 
            return { id, name, images, owner, description, tracks }; });

        this.store.dispatch(loadedPlaylists(
          { playlist: this.playlists }
        ));

        this.store.dispatch(loadedCurrentPlaylist(
          { currentPlaylist: this.playlists![0] }
        ));

      })
  
  };

  getUser = () => {

    this.usuariosService.obtenerCurrentUser()
      .subscribe(response => {
        this.profile = response;
        const { country, display_name, email, followers, images, product, type } = this.profile;
        const profile = {
          country: country,
          display_name: display_name,
          email: email,
          followers: followers,
          images: images,
          product: product,
          type: type,
        }
        this.store.dispatch(currentProfile(
          { currentProfile: profile } 
        ));

       });
    
  };
  
}
