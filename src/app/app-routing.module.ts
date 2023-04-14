import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tariff', pathMatch: 'full' },
  { path: 'tariff', loadChildren: () => import('./tariff/tariff.module').then(m => m.TariffModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
