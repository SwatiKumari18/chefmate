const dummyRecipes = [
  {
    id: 1,
    title: "Chickpea Salad",
    image: 'https://images.unsplash.com/photo-1688807462845-a06bc0abcadb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    diet: "vegan",
    servings: 2,
    cookTime: "15 mins",
    ingredients: [
      { name: "Chickpeas", quantity: 1, unit: "cup" },
      { name: "Olive Oil", quantity: 2, unit: "tbsp" }
    ],
    steps: [
      "Rinse chickpeas",
      "Mix with chopped veggies and dressing"
    ]
  },
  {
    id: 2,
    title: "Paneer Curry",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyfGVufDB8fDB8fHww",
    diet: "vegetarian",
    servings: 4,
    cookTime: "30 mins",
    ingredients: [
      { name: "Paneer", quantity: 200, unit: "g" },
      { name: "Tomato Puree", quantity: 1, unit: "cup" }
    ],
    steps: [
      "Fry paneer",
      "Cook tomato gravy and add spices",
      "Combine and simmer"
    ]
  }
];

export default dummyRecipes;
