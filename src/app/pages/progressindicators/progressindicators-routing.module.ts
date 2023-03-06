import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressindicatorsPage } from './progressindicators.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressindicatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressindicatorsPageRoutingModule {}
