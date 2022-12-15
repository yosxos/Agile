import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  {path:'',component:ConnexionComponent},
  {path:'profil',component:ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
