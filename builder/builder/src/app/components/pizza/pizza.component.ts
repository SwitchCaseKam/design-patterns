import { Component, OnInit } from '@angular/core';
import { MargheritaBuilder } from './pizzaBuilders/margheritaBuilder.model';
import { PizzaDirector } from './pizza-director.model';
import { FunghiBuilder } from './pizzaBuilders/funghiBuilder.model';
import { MeatPizzaBuilder } from './pizzaBuilders/meatPizzaBuilder.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const pizzaDirector = new PizzaDirector();

    console.log('Margherita pizza:\n');
    const pizzaMargheritaBuilder = new MargheritaBuilder();
    pizzaDirector.buildMargherita();
    pizzaMargheritaBuilder.getProduct().displayIngredients();

    console.log('Funghi pizza:\n');
    const pizzaFunghiBuilder = new FunghiBuilder();
    pizzaDirector.buildFunghi();
    pizzaFunghiBuilder.getProduct().displayIngredients();

    console.log('Meat pizza:\n');
    const pizzaMeatBuilder = new MeatPizzaBuilder();
    pizzaDirector.buildFunghi();
    pizzaMeatBuilder.getProduct().displayIngredients();
  }

}
