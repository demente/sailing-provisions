class FoodItem {
    name: string;
    kcal: number; //per 100 gr

    constructor(name: string, kcal: number) {
        this.name = name;
        this.kcal = kcal;
    }
}

class Recipe {
    name: string;
    servingSize: number; //in grams
    kcal: number = 0; //per serving size, to be calculated
    ingredients: Map<FoodItem, number>

    constructor(name: string, servingSize: number, ingredients: Map<FoodItem, number>) {
        this.name = name
        this.servingSize = servingSize
        this.ingredients = ingredients
    }

}

class ShoppingList {
    groceries: Map<FoodItem, number>

    constructor(groceries: Map<FoodItem, number>) {
        this.groceries = groceries
    }

}

export { FoodItem as GroceryItem, Recipe, ShoppingList }