import { Component } from '@angular/core';

@Component({
    selector: 'app-eighth-host-binding',
    templateUrl: './eighth-host-binding.component.html',
    styleUrls: ['./eighth-host-binding.component.css']
})
export class EighthHostBindingComponent {
    public display: string = 'block';
    public fontSize: number = 16;
    public height: number;
    public nightMode: boolean = false;
}
