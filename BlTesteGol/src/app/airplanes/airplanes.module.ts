import { NgModule } from "@angular/core";

import { AirplaneModule } from "./airplane/airplane.module";
import { AirplaneListModule } from "./airplane-list/airplane-list.module";
import { AirplaneFormModule } from "./airplane-form/airplane-form.module";

@NgModule({
    imports: [
        AirplaneListModule,
        AirplaneModule,
        AirplaneFormModule
    ]
})
export class AirplanesModule {}