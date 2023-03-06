import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navigations2PageRoutingModule } from './navigations2-routing.module';

import { Navigations2Page } from './navigations2.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navigations2PageRoutingModule,
    
    
  ],
  declarations: [Navigations2Page]
})
export class Navigations2PageModule {}
