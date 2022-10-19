import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../../app/app.component.scss'],
})
export class dashboardComponent {

  location: string;

  constructor(location : Location) {
    
    this.location = location.path(true);
    try {
      this.location = this.location.split("=")[1].split("&")[0];
      localStorage.setItem('token', this.location);
    } catch (error) {
      console.log(error)
    }
    
  }
  
}
