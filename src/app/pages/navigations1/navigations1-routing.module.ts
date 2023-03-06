import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navigations1Page } from './navigations1.page';

const routes: Routes = [
  {
    path: '',
    component: Navigations1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navigations1PageRoutingModule {}
