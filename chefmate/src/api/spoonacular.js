import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

/**
 * Search recipes with pagination.
 */
export const searchRecipes = async (
  query,
  diet,
  page = 1,
  pageSize = 12
) => {
  try {
    const offset = (page - 1) * pageSize;

    const { data } = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query,
        diet: diet !== 'all' ? diet : undefined,
        number: pageSize,
        offset,
        addRecipeInformation: true,
      },
    });

    const recipes = data.results.map((r) => ({
      id: r.id,
      title: r.title,
      image: r.image,
      diet:
        r.vegan
          ? 'vegan'
          : r.vegetarian
          ? 'vegetarian'
          : 'non-veg',
      servings: r.servings,
      cookTime: `${r.readyInMinutes} mins`,
      ingredients: r.extendedIngredients?.slice(0, 5).map((i) => ({
        name: i.name,
        quantity: i.amount,
        unit: i.unit,
      })) || [],
      steps:
        r.analyzedInstructions?.[0]?.steps
          ?.slice(0, 5)
          .map((s) => s.step) || [],
    }));

    return { recipes, total: data.totalResults };
  } catch (err) {
    console.error('Search error:', err);
    return { recipes: [], total: 0 };
  }
};

/**
 * Full information for one recipe.
 */
export const getRecipeById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}/information`, {
      params: { apiKey: API_KEY, includeNutrition: false },
    });

    return {
      id: data.id,
      title: data.title,
      image: data.image,
      diet: data.vegan
        ? 'vegan'
        : data.vegetarian
        ? 'vegetarian'
        : 'non-veg',
      servings: data.servings,
      cookTime: `${data.readyInMinutes} mins`,
      ingredients: data.extendedIngredients.map((i) => ({
        name: i.name,
        quantity: i.amount,
        unit: i.unit,
      })),
      steps:
        data.analyzedInstructions?.[0]?.steps.map((s) => s.step) || [],
      summary: data.summary,
    };
  } catch (err) {
    console.error('Detail error:', err);
    return null;
  }
};
