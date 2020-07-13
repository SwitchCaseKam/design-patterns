import { PizzaBuilder } from './pizza-builder.model';

export class PizzaDirector {
  private builder: PizzaBuilder;

  public setBuilder(builder: PizzaBuilder): void {
    this.builder = builder;
  }

  public buildMargherita(): void {
    this.builder.addCheese();
  }

  public buildFunghi(): void {
    this.builder.addCheese();
    this.builder.addMushrooms();
  }

  public buildMeatPizza(): void {
    this.builder.addCheese();
    this.builder.addBecon();
    this.builder.addChicken();
    this.builder.addPepperoni();
  }
}
