import { Component } from '@angular/core';
import { UsuariosService } from 'src/services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private usuariosService: UsuariosService){
    }
}
