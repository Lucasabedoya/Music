import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { selectCurrentProfile } from 'src/store/selectors/counter.selector';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  profile$: [] | any;

  constructor(private store: Store<AppState>, private router: Router,) { 
    this.store.select(selectCurrentProfile).subscribe(cb => {this.profile$ = cb})
  }

  LogOut(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
