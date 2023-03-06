import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navigations2Page } from './navigations2.page';

const routes: Routes = [
  {
    path: '',
    component: Navigations2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navigations2PageRoutingModule {}
