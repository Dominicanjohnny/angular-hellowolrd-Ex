
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-event-binding',
    templateUrl: './my-event-binding.component.html',
    styleUrls: ['./my-event-binding.component.css'],
    template: `
        <label>Input: </label>
        <input (keyup)="recordAllTheKeyStrokes($event)">

     
    `
})
export class MyEventBindingComponent {
    recordAllTheKeyStrokes(event) {
        console.log(`Key inserted: ${event.key}`);
        //console.log(`Input value: ${event.currentTarget.value}`);
    }
}