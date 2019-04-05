import { Component, Input } from "@angular/core";

@Component({
    selector: 'bltg-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent {

    @Input() text = '';
}