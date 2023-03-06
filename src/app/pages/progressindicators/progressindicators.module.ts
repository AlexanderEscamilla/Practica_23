import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressindicatorsPageRoutingModule } from './progressindicators-routing.module';

import { ProgressindicatorsPage } from './progressindicators.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ProgressindicatorsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProgressindicatorsPageRoutingModule,
        ComponentsModule
    ]
})
export class ProgressindicatorsPageModule {}
