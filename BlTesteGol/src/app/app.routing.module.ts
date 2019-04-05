import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { AirplaneListComponent } from "./airplanes/airplane-list/airplane-list.component";
import { AirplaneListResolver } from "./airplanes/airplane-list/airplane-list.resolver";
import { AirplaneFormComponent } from "./airplanes/airplane-form/airplane-form.component";

const routes: Routes = [
    { 
        path: '', 
        component: AirplaneListComponent,
        resolve: {
            resultAirplanes: AirplaneListResolver
        }
    },
    { 
        path: 'adicionar', 
        component: AirplaneFormComponent
    },
    { 
        path: 'editar/:airplaneId', 
        component: AirplaneFormComponent
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}