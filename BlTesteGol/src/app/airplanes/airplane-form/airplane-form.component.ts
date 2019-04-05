import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Airplane } from "../airplane/airplane";
import { AirplaneService } from "../airplane/airplane.service";
import { ResultSingle } from "src/app/core/model/result";

@Component({
    templateUrl: './airplane-form.component.html'
})
export class AirplaneFormComponent implements OnInit {

    airplaneForm: FormGroup;
    airplane: Airplane;
    result: ResultSingle;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private airplaneService: AirplaneService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        
        this.airplaneForm = this.formBuilder.group({
            modelo: ['', Validators.required],
            qtdPassageiros: ['', Validators.required]
        });

        //TODO: Implementar um resolver no lugar desse if
        if (this.activatedRoute.snapshot.params.airplaneId) {
            this.airplaneService.obterPorId(this.activatedRoute.snapshot.params.airplaneId)
                .subscribe(res => {
                    this.result = res as ResultSingle;
                    this.airplane = this.result.data;

                    this.airplaneForm.controls['modelo'].setValue(this.airplane.modelo);
                    this.airplaneForm.controls['qtdPassageiros'].setValue(this.airplane.qtdPassageiros);
                });
        }
        
        
    }

    //TODO: Implementar uma diretiva no lugar dessa function
    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
        }
        return true;
    
    }

    voltar() {
        this.router.navigate(['']);
    }

    submit(){
        
        const id = (this.airplane !== undefined ) ? this.airplane.id : '';
        const modelo = this.airplaneForm.get('modelo').value;
        const qtdPassageiros = this.airplaneForm.get('qtdPassageiros').value;

        if (this.airplane !== undefined && this.airplane.id != null && this.airplane.id != ''){
            this.airplaneService
                .editar(id, modelo, qtdPassageiros)
                .subscribe(res => {

                        this.result = res as ResultSingle;

                        //Todo: implementar retorno das msgs de rro da API
                        if (this.result.success){
                            alert('Registro salvo com sucesso!');
                            this.router.navigate([''])
                        }
                        else{
                            alert('Erro ao salvar o registro');
                        }
                    },
                    err => {
                        alert('Ocorreu um erro ao salvar o registro');
                    }
                );
        }
        else{
            
            this.airplaneService
                .adicionar(modelo, qtdPassageiros)
                .subscribe(res => {
                        this.result = res as ResultSingle;

                        if (this.result.success){
                            alert('Registro salvo com sucesso!');
                            this.router.navigate([''])
                        }
                        else{
                            alert('Erro ao salvar o registro');
                        }
                    },
                    err => {
                        alert('Ocorreu um erro ao salvar o registro');
                    }
                );
        }
        
    }
}