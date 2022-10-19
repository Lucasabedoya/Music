import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CurrentPlaylistComponent } from 'src/components/organisms/Current-playlist/current-playlist.component';
import { NavbarComponent } from 'src/components/organisms/Navbar/navbar.component';
import { SidebarComponent } from 'src/components/organisms/Sidebar/sidebar.component';
import { dashboardComponent } from 'src/components/template/dashboard/dashboard.component';
import { HomeComponent } from 'src/components/template/Home/home.component';
import { LoginComponent } from 'src/components/template/Login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlsComponent } from '../components/organisms/Controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    dashboardComponent,
    CurrentPlaylistComponent,
    SidebarComponent,
    NavbarComponent,
    ControlsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private router: Router,
    private service: AppRoutingModule) { }
}
