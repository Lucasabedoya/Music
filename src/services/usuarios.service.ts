import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { 
  }

  obtenerCurrentUser(){
    return this.http.get('https://api.spotify.com/v1/me', {
    })
  }

  obtenerPlaylists(){
    return this.http.get('https://api.spotify.com/v1/me/playlists', {
    })
  }

  obtenerCurrentTracks(url: string){
    return this.http.get(url, {
    })
  }

  obtenerRecomendations(){
    return this.http.get('https://api.spotify.com/v1/recommendations?limit=20', {
    })
  }

  obtenerFavoritos(){
    return this.http.get('https://api.spotify.com/v1/me/tracks?limit=50', {
    })
  }

  getToken(authOptions: any){
    return this.http.post('https://accounts.spotify.com/api/token', authOptions)
  }

  setFavoriteTrack(ids: { ids: string }): Observable<any>{
    return this.http.put<any>(`https://api.spotify.com/v1/me/tracks?ids=${ids.ids}`, ids );
  }

  removeFavoriteTrack(ids: { ids: string }): Observable<any>{
    return this.http.delete<any>(`https://api.spotify.com/v1/me/tracks?ids=${ids.ids}`);
  }
  
} 
