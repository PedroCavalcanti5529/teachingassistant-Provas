import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MetasComponent } from './metas.component';
import { AlunosComponent } from './alunos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alunos',
    pathMatch: 'full'
  },
  {
    path: 'metas',
    component: MetasComponent
  },
  {
    path: 'alunos',
    component: AlunosComponent
  },
  {
    path: '**',
    redirectTo: 'alunos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}