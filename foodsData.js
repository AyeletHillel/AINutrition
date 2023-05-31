const menstrualPhase = {
  foodGroups: {
    meat: ["Lean beef", "Chicken", "Turkey"],
    seafood: ["Salmon", "Sardines", "Mackerel"],
    vegetables: ["Spinach", "Kale", "Broccoli"],
    fruits: ["Berries", "Oranges", "Apples"],
    grains: ["Quinoa", "Brown rice", "Oats"],
    legumes: ["Lentils", "Chickpeas", "Black beans"],
    nuts: ["Almonds", "Walnuts", "Flaxseeds"],
    other: ["Greek yogurt", "Avocado", "Green tea"],
  },
};

const follicularPhase = {
  foodGroups: {
    meat: ["Lean chicken", "Turkey", "Pork"],
    seafood: ["Cod", "Tuna", "Shrimp"],
    vegetables: ["Asparagus", "Carrots", "Cauliflower"],
    fruits: ["Berries", "Pineapple", "Papaya"],
    grains: ["Quinoa", "Barley", "Whole wheat bread"],
    legumes: ["Kidney beans", "Edamame", "Lentils"],
    nuts: ["Cashews", "Pumpkin seeds", "Chia seeds"],
    other: ["Cottage cheese", "Yogurt", "Green leafy vegetables"],
  },
};

const ovulatoryPhase = {
  foodGroups: {
    meat: ["Lean beef", "Chicken", "Lamb"],
    seafood: ["Salmon", "Trout", "Tuna"],
    vegetables: ["Broccoli", "Bell peppers", "Cauliflower"],
    fruits: ["Oranges", "Berries", "Pomegranate"],
    grains: ["Quinoa", "Brown rice", "Millet"],
    legumes: ["Chickpeas", "Lentils", "Black beans"],
    nuts: ["Brazil nuts", "Pistachios", "Sunflower seeds"],
    other: ["Greek yogurt", "Milk", "Olive oil"],
  },
};

const lutealPhase = {
  foodGroups: {
    meat: ["Lean turkey", "Chicken", "Venison"],
    seafood: ["Shrimp", "Salmon", "Tilapia"],
    vegetables: ["Zucchini", "Spinach", "Brussels sprouts"],
    fruits: ["Apples", "Berries", "Kiwi"],
    grains: ["Quinoa", "Whole grain bread", "Buckwheat"],
    legumes: ["Black beans", "Kidney beans", "Soybeans"],
    nuts: ["Walnuts", "Pecans", "Almonds"],
    other: ["Low-fat dairy", "Olive oil", "Herbal tea"],
  },
};

// Export the data as an ES6 module
export { menstrualPhase, follicularPhase, ovulatoryPhase, lutealPhase };
