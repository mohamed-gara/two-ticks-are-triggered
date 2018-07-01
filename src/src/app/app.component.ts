import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h3>On each button click two ApplicationRef.tick() are triggred</h3>

    <div>
      <div>Counter: <input [ngModel]="counter" #counterValue="ngModel"></div>
      
      <div>Counter value: {{ counter }}</div>

      <div>Exported value: {{ counterValue.value }}</div>  
    </div>

    <div>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  ngDoCheck() {    
    console.log('Angular change detection cycle is running.');
  }
}
