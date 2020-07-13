export class Pizza {
  public ingredients: string[];

  public displayIngredients(): void {
    console.log(`Ingeredients: ${this.ingredients.join('\n')}\n`);
  }
}
