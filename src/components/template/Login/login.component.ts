import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../app/app.component.scss'],
})

export class LoginComponent {

  
  constructor(private router: Router) {
    
    try {
      const token = localStorage.getItem('token')
      if(token){this.router.navigate(['/dashboard'])}
    } catch (error) {
    }
    
  }
  

  redirect = () => {
            
    const clientId = '222ec84c437548bfab5fe139838fd1d0';
    const redirectUrl = 'http://localhost:4200/';
    const apiUrl = 'http://accounts.spotify.com/authorize';
    const scope = [
        'user-read-email', 
        'user-read-private',
        'user-modify-playback-state',
        'user-read-playback-state',
        'user-read-currently-playing',
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        " "
    )}&response_type=token&show_dialog=true`;

  }


}
