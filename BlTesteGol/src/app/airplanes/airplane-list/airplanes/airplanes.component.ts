import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import { Airplane } from "../../airplane/airplane";
import { AirplaneService } from "../../airplane/airplane.service";
import { Router } from "@angular/router";

@Component({
    selector: 'bltg-airplanes',
    templateUrl: './airplanes.component.html'
})
export class AirplanesComponent implements OnChanges {

    @Input() airplanes: Airplane[] = [];
  
    constructor(
        private airplaneService: AirplaneService,
        private router: Router) { }

    ngOnChanges(changes: SimpleChanges){
        if(changes.airplanes)
            this.airplanes = this.airplanes;
    }

    remover(event, item: string) {
        this.airplaneService.remover(item).subscribe(
            () => {
                alert('Registro removido com sucesso!');
                this.airplaneService.listAirplane()
                    .subscribe(res => this.airplanes = res.data as Airplane[]);
            },
            err => {console.log('erro');}
        );
    }

    editar(event, item: string) {

        this.router.navigate(['editar', item]);
    }
}