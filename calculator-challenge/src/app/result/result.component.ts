import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
})
export class ResultComponent {
  @Input() receivedResult: number = 0;
}
