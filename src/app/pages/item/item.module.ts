import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemPageRoutingModule } from './item-routing.module';

import { ItemPage } from './item.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ItemPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ItemPageRoutingModule,
        ComponentsModule
    ]
})
export class ItemPageModule {}
