import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculateComponent } from "./calculate/calculate.component";
import { ResultComponent } from './result/result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculateComponent, ResultComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  result: number = 0;

  onCalculate(receivedResult: number): void {
    console.log(receivedResult);
    this.result = receivedResult;
  }
}
