import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgePageRoutingModule } from './badge-routing.module';

import { BadgePage } from './badge.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [BadgePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BadgePageRoutingModule,
        ComponentsModule
    ]
})
export class BadgePageModule {}
