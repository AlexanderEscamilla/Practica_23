import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navigations1PageRoutingModule } from './navigations1-routing.module';

import { Navigations1Page } from './navigations1.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navigations1PageRoutingModule,
    
    
  ],
  declarations: [Navigations1Page]
})
export class Navigations1PageModule {}
