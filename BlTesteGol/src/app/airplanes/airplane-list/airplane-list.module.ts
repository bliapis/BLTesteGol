import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AirplaneListComponent } from './airplane-list.component';
import { AirplanesComponent } from "./airplanes/airplanes.component";
import { AirplaneModule } from "../airplane/airplane.module";

@NgModule({
    declarations: [
        AirplaneListComponent,
        AirplanesComponent
    ],
    imports: [
        CommonModule,
        AirplaneModule
    ]
})
export class AirplaneListModule {}