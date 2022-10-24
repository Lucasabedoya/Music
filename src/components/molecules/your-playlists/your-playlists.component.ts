import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { AppState } from 'src/store/app.state';
import { selectLoading, selectPlaylists } from 'src/store/selectors/counter.selector';

@Component({
  selector: 'your-playlists',
  templateUrl: './your-playlists.component.html',
  styleUrls: ['./your-playlists.component.scss']
})
export class YourPlaylistsComponent implements OnInit {

  loading$: Observable<boolean> = new Observable()
  playlists$: Observable<any> = new Observable();

  constructor( private store: Store<AppState>) { 
    this.loading$ = this.store.select(selectLoading);
    this.playlists$ = this.store.select(selectPlaylists)
  }

  ngOnInit(): void {
  }
   
}
