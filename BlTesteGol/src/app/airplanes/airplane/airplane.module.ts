import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AirplaneComponent } from "./airplane.component";

@NgModule({
    declarations: [ AirplaneComponent ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ AirplaneComponent ]
})
export class AirplaneModule {}