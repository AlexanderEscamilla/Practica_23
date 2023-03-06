import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navigations3PageRoutingModule } from './navigations3-routing.module';

import { Navigations3Page } from './navigations3.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navigations3PageRoutingModule,
    BrowserModule,
    RouterModule.forRoot([]),
    IonicModule.forRoot({})
  ],
   
    
  
  declarations: [Navigations3Page]
})
export class Navigations3PageModule {}
