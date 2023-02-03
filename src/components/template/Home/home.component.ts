import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsuariosService } from 'src/services/usuarios.service';
import axios from 'axios';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../app/app.component.scss'],
})
export class HomeComponent implements OnInit{

  token?: string | null;
  code?: string | null;

  constructor( private router: Router, private route: ActivatedRoute, private usuariosService: UsuariosService) {
  }

  ngOnInit(): void {
    const code = this.route.snapshot.queryParams['code']

    if (code) {
      localStorage.setItem('code', code);
      this.peticion(code)
    }    
  }

  peticion = async (code: string) => {

    const clientId = '222ec84c437548bfab5fe139838fd1d0';
    const client_secret = '7309346e80764b3385011c61cbb586af';

    const serialize = function(obj: any) {
      var str = [];
      for (var p in obj) {
          if (obj.hasOwnProperty(p)) {
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
      }
      return str.join("&");
  }

    const res = axios.post('https://accounts.spotify.com/api/token',
    serialize(
      {
        code: code,
        redirect_uri: 'http://localhost:4200/home',
        grant_type: 'authorization_code'
      }), 
      {
        headers: { 
          'Authorization': 'Basic ' + btoa(clientId + ':' + client_secret),
        }
      })
      .then( res =>{ 
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('refreshtoken', res.data.refresh_token);
        this.router.navigate(['/dashboard']);
      } )
      .catch( err => { } );

  
  }



  }
