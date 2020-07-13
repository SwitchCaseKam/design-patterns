export class Pizza {
  public ingredients: string[];

  public constructor() {
    this.ingredients = [];
  }

  public displayIngredients(): void {
    console.log(`Ingeredients: ${this.ingredients.join('\n')}\n`);
  }
}
