import { Component } from '@angular/core';

@Component({
    selector: 'app-eighth-host-example',
    templateUrl: './eighth-host-example.component.html',
    styles: [`
        .custom-thumbnail {
            height: 200px;
            width: 200px;
        }
    `]
})
export class EighthHostExampleComponent {
    public avatorUrl: string = '';
}
