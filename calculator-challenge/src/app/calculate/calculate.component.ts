import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculate.component.html',
})
export class CalculateComponent {

  value1: number = 0;
  value2: number = 0;
  result: number = 0;
  operation: string = '';

  @Output() calculateComponentResult = new EventEmitter<number>();

  calculate(operation: string): void {
    if (this.value1 === null || this.value2 === null) {
      alert('Por favor, ingrese ambos valores.');
      return;
    }

    switch (operation) {
      case '+':
        this.result = this.value1 + this.value2;
        this.calculateComponentResult.emit(this.result);
        break;
      case '-':
        this.result = this.value1 - this.value2;
        this.calculateComponentResult.emit(this.result);
        break;
      case '*':
        this.result = this.value1 * this.value2;
        this.calculateComponentResult.emit(this.result);
        break;
      case '/':
        if (this.value2 === 0) {
          alert('No se puede dividir por cero.');
          return;
        }
        this.result = this.value1 / this.value2;
        this.calculateComponentResult.emit(this.result);
        break;
      case '^':
        this.result = Math.pow(this.value1, this.value2);
        this.calculateComponentResult.emit(this.result);
        break;
      default:
        alert('Operación no soportada.');
        return;
    }
  }

  clearInputs(): void {
    this.value1 = 0;
    this.value2 = 0;
    this.result = 0;
    this.calculateComponentResult.emit(this.result);
  }
}
