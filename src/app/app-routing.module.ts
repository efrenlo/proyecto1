import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'salones', loadChildren: './salones/salones.module#SalonesPageModule' },
  { path: 'administrativos', loadChildren: './administrativos/administrativos.module#AdministrativosPageModule' },
  { path: 'loncherias', loadChildren: './loncherias/loncherias.module#LoncheriasPageModule' },
  { path: 'canchas', loadChildren: './canchas/canchas.module#CanchasPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
