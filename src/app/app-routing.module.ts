import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/shared/guards/LogIn/login.guard';
import { FavoritesComponent } from 'src/components/organisms/favorites/favorites.component';
import { PlaylistComponent } from 'src/components/organisms/playlist/playlist.component';
import { ProfileComponent } from 'src/components/organisms/profile/profile.component';
import { dashboardComponent } from 'src/components/template/dashboard/dashboard.component';
import { HomeComponent } from 'src/components/template/Home/home.component';
import { LoginComponent } from 'src/components/template/Login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: dashboardComponent,
    canActivate: [LoginGuard],
    children: [
      {path: '', component: PlaylistComponent},
      {path: 'perfil', component: ProfileComponent},
      {path: 'favoritos', component: FavoritesComponent}
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
