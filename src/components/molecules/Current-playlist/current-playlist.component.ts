import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/store/app.state';
import { selectCurrentPlaylist, selectLoading } from 'src/store/selectors/counter.selector';

@Component({
  selector: 'current-playlist',
  templateUrl: './current-playlist.component.html',
  styleUrls: ['./current-playlist.component.scss']
})
export class CurrentPlaylistComponent implements OnInit {

  currentPlaylist$: Observable<ReadonlyArray<any>> = new Observable();
  
  constructor( private store: Store<AppState>) { 
    this.currentPlaylist$ = this.store.select(selectCurrentPlaylist)
  }

  ngOnInit(): void {
  }

}
