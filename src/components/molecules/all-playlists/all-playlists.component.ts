import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { selectPlaylists } from 'src/store/selectors/counter.selector';

@Component({
  selector: 'all-playlists',
  templateUrl: './all-playlists.component.html',
  styleUrls: ['./all-playlists.component.scss']
})
export class AllPlaylistsComponent implements OnInit {

  playlists$: [] | any;

  constructor(private store: Store<AppState>) {
    this.store.select(selectPlaylists).subscribe(cb => { this.playlists$ = cb ; console.log(this.playlists$)})
  }

  ngOnInit(): void {
  }

}
