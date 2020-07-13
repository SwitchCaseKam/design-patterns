import { PizzaBuilder } from '../pizza-builder.model';
import { Pizza } from '../pizza.class';

export class MargheritaBuilder implements PizzaBuilder {
  private pizza: Pizza;

  public constructor() {
    this.reset();
  }

  public reset(): void {
    this.pizza = new Pizza()
  }

  public addCheese(): void {
    this.pizza.ingredients.push('cheese');
  }

  public addBecon(): void {
  }

  public addChicken(): void {
  }

  public addPepperoni(): void {
  }

  public addTomato(): void {
  }

  public addMushrooms(): void {
  }

  public getProduct(): Pizza {
    const result = this.pizza;
    this.reset();
    return result;
  }
}
