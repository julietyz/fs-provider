import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'new-rental', loadChildren: './new-rental/new-rental.module#NewRentalPageModule' },
  { path: 'prop-deets', loadChildren: './prop-deets/prop-deets.module#PropDeetsPageModule' },
  { path: 'edit-rental', loadChildren: './edit-rental/edit-rental.module#EditRentalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
