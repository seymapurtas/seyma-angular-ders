import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () =>
      import('./pages/homepage/homepage.module').then((m) => m.HomepageModule),
  },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
  { path: 'cars', loadChildren: () => import('./pages/cars/cars.module').then(m => m.CarsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
