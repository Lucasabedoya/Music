import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CurrentPlaylistComponent } from 'src/components/molecules/Current-playlist/current-playlist.component';
import { NavbarComponent } from 'src/components/organisms/Navbar/navbar.component';
import { SidebarComponent } from 'src/components/organisms/Sidebar/sidebar.component';
import { dashboardComponent } from 'src/components/template/dashboard/dashboard.component';
import { HomeComponent } from 'src/components/template/Home/home.component';
import { LoginComponent } from 'src/components/template/Login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlsComponent } from '../components/organisms/Controls/controls.component';
import { PerfilComponent } from '../components/molecules/perfilNav/perfil.component';
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
import { CurrentTracksComponent } from '../components/molecules/current-tracks/current-tracks.component';
import { PlaylistComponent } from '../components/organisms/playlist/playlist.component';
import { ProfileComponent } from '../components/organisms/profile/profile.component';
import { AllPlaylistsComponent } from '../components/molecules/all-playlists/all-playlists.component';
import { PlaylistBoxComponent } from 'src/components/atoms/playlistBox/playlistBox.component';
import { SearchBarComponent } from 'src/components/atoms/search-bar/search-bar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/services/interceptors/interceptor.service';
import { FavoritesComponent } from '../components/organisms/favorites/favorites.component';

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
    CurrentTracksComponent,
    PlaylistComponent,
    ProfileComponent,
    AllPlaylistsComponent,
    PlaylistBoxComponent,
    SearchBarComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private router: Router,
    private service: AppRoutingModule) { }
}
