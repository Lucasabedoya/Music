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
import { PerfilComponent } from '../components/molecules/perfil/perfil.component';
import { SidebarLinksComponent } from '../components/molecules/sidebar-links/sidebar-links.component';
import { YourPlaylistsComponent } from '../components/molecules/your-playlists/your-playlists.component';
import { AImageComponent } from '../components/atoms/aimage/aimage.component';
import { PImageComponent } from '../components/atoms/pimage/pimage.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoaderComponent } from '../components/atoms/loader/loader.component';
import { playlistsReducer } from '../store/reducers/counter.reducer';
import { ROOT_REDUCERS } from 'src/store/app.state';

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
    PerfilComponent,
    SidebarLinksComponent,
    YourPlaylistsComponent,
    AImageComponent,
    PImageComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private router: Router,
    private service: AppRoutingModule) { }
}
