import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Airplane } from "./airplane";
import { Result } from "src/app/core/model/result";

import { HttpHeaders } from '@angular/common/http';

const API = 'http://localhost:51306'


@Injectable({ providedIn: 'root' })
export class AirplaneService {

    constructor(private http: HttpClient) {}

    listAirplane(){
        return this.http
            .get<Result>(API + '/airplane/todos');
    }

    obterPorId(id: string){
        return this.http.get(API + '/airplane/' + id);
    }

    adicionar(modelo: string, qtdPassageiros: string){
        
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {  
                    Id:'', Modelo: modelo, QtdPqssageiros: qtdPassageiros, DataCriacao: ''  
            };

        return this.http.post(API + '/airplane/adicionar', {modelo, qtdPassageiros});
    }

    editar(id: string, modelo: string, qtdPassageiros: string){
        return this.http.put(API + '/airplane/editar', {id, modelo, qtdPassageiros})
    }

    remover(id: string){

        //return this.http.delete(API + '/airplane/remover', id)

        return this.http.delete(API + '/airplane/remover/' + id);
    }
}