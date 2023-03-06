import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navigations3Page } from './navigations3.page';

const routes: Routes = [
  {
    path: '',
    component: Navigations3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navigations3PageRoutingModule {}
