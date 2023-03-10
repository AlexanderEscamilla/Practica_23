import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioPageRoutingModule } from './radio-routing.module';

import { RadioPage } from './radio.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [RadioPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RadioPageRoutingModule,
        ComponentsModule
    ]
})
export class RadioPageModule {}
