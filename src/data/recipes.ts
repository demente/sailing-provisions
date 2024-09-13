
import * as fs from 'fs';
import { FoodItem } from '../model';
import path from 'path';

function importFoodItems(): FoodItem[] {
    const jsonFilePath = path.resolve(__dirname, './food-items.json');

    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');

    const foodItems: FoodItem[] = JSON.parse(jsonData);
    return foodItems
}

function generateRecepies() {
    console.log("Generating recepies...")
    const foodItems = importFoodItems()
}

export { generateRecepies }