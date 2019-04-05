import { Component, Input } from "@angular/core";

@Component({
    selector: 'bltg-airplane',
    templateUrl: 'airplane.component.html'
})
export class AirplaneComponent {

    @Input() id = '';
    @Input() modelo = '';
    @Input() qtdPassageiros = 0;
    @Input() dataCriacao = '';
}