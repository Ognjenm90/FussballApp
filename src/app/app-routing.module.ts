import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigueComponent } from './ligue/ligue.component';
const routes: Routes = [
  { path: 'ligues', component: LigueComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
