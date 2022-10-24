import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadedPlaylists, loadPlaylists } from 'src/store/actions/counter.actions';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../../app/app.component.scss'],
})
export class dashboardComponent implements OnInit{

  location: string;
  token: string | null;
  playlists?: [{
    id?: number,
    name?: string,
  }] | undefined; 

  constructor(location : Location, private store: Store<any>) {
    this.token = localStorage.getItem('token');
    this.location = location.path(true);
    try {
      this.location = this.location.split("=")[1].split("&")[0];
      localStorage.setItem('token', this.location);
    } catch (error) {
      
    }
    
  }
  ngOnInit(): void {
    this.store.dispatch(loadPlaylists());
    this.getPlaylistData();
  }

  private getPlaylistData = async () => {
    
    await fetch(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "application/json",
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        let playlists = data.items.map(({ id, name }: { id: number; name: string }) => { 
          return { id, name }; }); 
        this.playlists = playlists;
        this.store.dispatch(loadedPlaylists(
          { playlist: this.playlists }
        ))
      });
  };
  
}
