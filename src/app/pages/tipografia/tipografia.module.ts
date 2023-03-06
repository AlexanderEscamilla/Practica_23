import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipografiaPageRoutingModule } from './tipografia-routing.module';

import { TipografiaPage } from './tipografia.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [TipografiaPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TipografiaPageRoutingModule,
        ComponentsModule
    ]
})
export class TipografiaPageModule {}
