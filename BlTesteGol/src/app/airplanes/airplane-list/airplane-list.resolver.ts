import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { AirplaneService } from "../airplane/airplane.service";
import { Observable } from "rxjs";
import { Result } from "../../core/model/result";

@Injectable({ providedIn: 'root' })
export class AirplaneListResolver implements Resolve<Observable<Result>> {

    constructor(private service: AirplaneService) {}

    result: Result;

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Result>{

        return this.service.listAirplane();
    }
}