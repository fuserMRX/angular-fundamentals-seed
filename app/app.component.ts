import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
    <div class='app'>
        <button (click)="handleClick()">Change Name</button>
        <input type="text" [ngModel]="name"
        (ngModelChange)="handleChange($event)"
        > <!-- [ngModel] ->> is taking property binding 
        and (ngModelChange) ->> is taking event binding-->
        <input type="text" [(ngModel)] = "name"> <!--two way data-binding using banana in a box-->
        <div>{{ name }}</div>
    </div>
    `
})
export class AppComponent {
    name: string = 'Todd';
    //two-way like data-binding
    handleChange(value: string) {
        this.name = value;
    }
    handleClick() {
        this.name = 'Novodid';
    }
}


