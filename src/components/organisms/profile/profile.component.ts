import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuariosService } from 'src/services/usuarios.service';
import { AppState } from 'src/store/app.state';
import { selectCurrentProfile } from 'src/store/selectors/counter.selector';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile$: [] | any;
  recomendations$: [] | any;

  constructor(private store: Store<AppState>, private usuariosService: UsuariosService) {
    this.store.select(selectCurrentProfile).subscribe(cb => {this.profile$ = cb})
    // this.usuariosService.obtenerRecomendations()
    // .subscribe(response => {console.log(response)})

  }

  ngOnInit(): void {
  }

}
