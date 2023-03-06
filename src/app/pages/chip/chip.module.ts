import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChipPageRoutingModule } from './chip-routing.module';

import { ChipPage } from './chip.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ChipPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChipPageRoutingModule,
        ComponentsModule
    ]
})
export class ChipPageModule {}
