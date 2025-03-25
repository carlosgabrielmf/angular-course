import { Component, signal } from "@angular/core";


@Component({
  selector: 'count',
  viewProviders: [CounterComponent],
  templateUrl: './counter.component.html',
  styles: `

    button{
      padding: 0.5rem;
      margin: 1rem 0.5rem;
      width: 5rem;
    }

  `
})
export class CounterComponent {
  counter: number = 10;
  //* Los signal son funciones que me ayudar a renderizar mis componentes segun ciertos casos. Pueden ser de solo lectura o escritura.
  counterSignal = signal(10)

  //* Esta funcion incrementa en 1 el valor de mi contador
  increaseBy(value: number){
    this.counter += value;
    //* Aqui podemos ver como actua un signal, recibe un callback y un valor.
    this.counterSignal.update((current) => current + value);
  }

  //* Resetea y me devuelve al valor principal que es de 10
  Reset(reset: number = 0){
    this.counter = reset;
    this.counterSignal.set(reset);
  }

  //* Esta funcion disminuye en 1 el valor de mi contador
  decreaseBy(value: number){
    this.counter -= value;
    this.counterSignal.update((current) => current + value);
  }
}
