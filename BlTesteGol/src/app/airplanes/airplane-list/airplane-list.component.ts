import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Airplane } from "../airplane/airplane";
import { AirplaneService } from "../airplane/airplane.service";
import { Result } from "src/app/core/model/result";

@Component({
    selector: 'bltg-airplane-list',
    templateUrl: './airplane-list.component.html'
})
export class AirplaneListComponent implements OnInit{

    airplanes: Airplane[] = [];
    result: Result;

    constructor(
        private activatedRoute: ActivatedRoute,
        private airplaneService: AirplaneService,
        private router: Router
    ) {}

    ngOnInit(): void {

        this.result = this.activatedRoute.snapshot.data.resultAirplanes;
        this.airplanes = this.result.data as Airplane[];
    }

    addNovo(){
        this.router.navigate(['adicionar']);
    }
}