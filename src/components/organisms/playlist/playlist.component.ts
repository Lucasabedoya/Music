import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/services/usuarios.service';
import { AppState } from 'src/store/app.state';
import { selectLoading } from 'src/store/selectors/counter.selector';

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  
  constructor() {
   }

  ngOnInit(): void {
  }

}
