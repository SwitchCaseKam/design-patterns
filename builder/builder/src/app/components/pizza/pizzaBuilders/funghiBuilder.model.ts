import { PizzaBuilder } from '../pizza-builder.model';
import { Pizza } from '../pizza.class';

export class FunghiBuilder implements PizzaBuilder {
  private pizza: Pizza;

  public constructor() {
    this.reset();
  }

  public reset(): void {
    this.pizza = new Pizza();
  }

  public addCheese(): void {
    this.pizza.ingredients.push('cheese');
  }

  public addMushrooms(): void {
    this.pizza.ingredients.push('mushrooms');
  }

  public addBecon(): void {
  }

  public addChicken(): void {
  }

  public addPepperoni(): void {
  }

  public addTomato(): void {
  }

  public getProduct(): Pizza {
    const result = this.pizza;
    this.reset();
    return result;
  }
}
