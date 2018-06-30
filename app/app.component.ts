import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
    <div class='app'>
        <button (click)="handleClick()">Change Name</button>
        <input type="text" [value]="name" 
        (blur)="handleBlur($event)"
        (input)="handleInput($event)"
        > <!-- event binding-->
        <div>{{ name }}</div>
    </div>
    `
})
export class AppComponent {
    name: string = 'Todd';
    //one-way data-binding
    handleBlur(event: any) {
        this.name = event.target.value;
    }
    //two-way data-binding
    handleInput(event: any) {
        this.name = event.target.value;
    }
    handleClick() {
        this.name = 'Novodid';
    }
}


