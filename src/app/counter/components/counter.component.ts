import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<p>
  Contador Putos #: {{counter}}
</p>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(num: number): void {
    this.counter += num;
  }

  reset(): void{
    this.counter = 10;
  }

}
