
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// se crea la clase calculadora y extiende propiedades de la clase component
export default class CalculadoraComponent extends Component {
    //se definen los 3 campos en 0 cada vez que se inicia la aplicacion
    @tracked resultado = 0;
     num1 = 0;
     num2 = 0;

    //cada vez que se haga una accion en este metodo que se manda a llamar en el html
    //se sumaran los numeros que se ingresaron en los inputs
     
    @action
    sumar() {
        this.resultado = this.num1 + this.num2;
    }

    //cada vez que se haga una accion en este metodo que se manda a llamar en el html
    //se sumaran los numeros que se ingresaron en los inputs
    @action
    restar() {
        this.resultado = this.num1 - this.num2;

    }

    //cada vez que se haga una accion en este metodo que se manda a llamar en el html
    //se sumaran los numeros que se ingresaron en los inputs
    @action
    multiplicacion() {
        this.resultado = this.num1 * this.num2;
    }

    //cada vez que se haga una accion en este metodo que se manda a llamar en el html
    //se sumaran los numeros que se ingresaron en los inputs
    @action
    division() {
        this.resultado = this.num1 / this.num2;
    }

    //Al interactuar con el input se escucha el evento y se le asigna el valor del input a la 
    //variable num1
    @action
    actualizarnum1(event) {
        this.num1 = parseFloat(event.target.value);
    }

    //Al interactuar con el input se escucha el evento y se le asigna el valor del input a la 
    //variable num2
    @action
    actualizarnum2(event) {
        this.num2 = parseFloat(event.target.value);
    }

}