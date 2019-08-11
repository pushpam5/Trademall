import {Component,Input} from '@angular/core'
@Component({
    selector:'app-field-error-display',
    templateUrl:'./error-display.component.html',
    styleUrls:['./error-display.component.css']

})
export class ErrorDisplayComponent{
    @Input() errorMsg: string;
    @Input() displayError: boolean;
}