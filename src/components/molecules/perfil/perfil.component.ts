import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  LogOut(){
    localStorage.clear()
  }

  ngOnInit(): void {
  }

}
