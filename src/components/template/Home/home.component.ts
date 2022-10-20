import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../app/app.component.scss'],
})
export class HomeComponent {

  location: string;

  constructor(location : Location, private router: Router) {
    
    this.location = location.path(true);
    try {
      this.location = this.location.split("=")[1].split("&")[0];
      localStorage.setItem('token', this.location);
      this.router.navigate(['/dashboard'])
    } catch (error) {
      this.router.navigate(['/login'])
    }
    
  }

}
