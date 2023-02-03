import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/services/usuarios.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../app/app.component.scss'],
})

export class LoginComponent implements OnInit{

  token: string | null;
  
  constructor(private router: Router, private usuariosService: UsuariosService) {

    this.token = ''

    try {
      this.token = localStorage.getItem('token')
      if ( this.token !== '' ) { this.router.navigate(['/dashboard']) }
    } catch (error) {
    }
  };

  ngOnInit(): void {
  }

  redirect(){   
    const clientId = '222ec84c437548bfab5fe139838fd1d0';
    const redirectUrl = 'http://localhost:4200/home';
    const apiUrl = 'http://accounts.spotify.com/authorize';
    const client_secret = '7309346e80764b3385011c61cbb586af';
    const scope = [
        'user-read-email', 
        'user-read-private',
        'user-modify-playback-state',
        'user-read-playback-state',
        'user-read-currently-playing',
        'playlist-read-private',
        'user-library-modify',
        'user-library-read',
        'user-follow-modify',
        'user-follow-read',

    ];

    location.replace(
      `${apiUrl}?client_id=${clientId}&client_secret=${client_secret}&grant_type=authorization_code&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=code`) 

  }

}
