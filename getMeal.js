import chatgpt from "./chatgpt.js"
import {
    menstrualPhase,
    follicularPhase,
    ovulatoryPhase,
    lutealPhase,
  } from './foodsData.js';

  const menstrualFoods = menstrualPhase.foodGroups;
  const follicularFoods = follicularPhase.foodGroups;
  const ovulatoryFoods = ovulatoryPhase.foodGroups;
  const lutealFoods = lutealPhase.foodGroups;
  

const getMeal = async (phase, meal_type) => {

    const phaseFoods = {
        menstrual: menstrualFoods,
        follicular: follicularFoods,
        ovulatory: ovulatoryFoods,
        luteal: lutealFoods,
      };
    
    const prompt = `Suggest one good meal for ${meal_type} to have for ${phase} phase?. Example response: For ${meal_type} during the ${phase} phase, you can try a delicious meal that includes ${phaseFoods[phase]}. For instance, you could prepare a nourishing salad with a mix of fresh greens, sliced vegetables, and a protein source like grilled chicken or chickpeas. Drizzle with a homemade dressing and add a sprinkle of nuts or seeds for extra crunch and nutrition.`; 
    const meal = await chatgpt(prompt);
    
}

export default getMeal;

getMeal('menstrual', 'lunch')

