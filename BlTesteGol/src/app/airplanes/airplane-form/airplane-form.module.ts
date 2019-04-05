import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AirplaneFormComponent } from "./airplane-form.component";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";

@NgModule({
    declarations: [ AirplaneFormComponent ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule
    ]
})
export class AirplaneFormModule {}