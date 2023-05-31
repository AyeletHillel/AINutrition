import dotenv from 'dotenv' 
dotenv.config();

import {
    menstrualPhase,
    follicularPhase,
    ovulatoryPhase,
    lutealPhase,
  } from './foodsData.js';

import chatgpt from './chatgpt.js';

const menstrualFoods = menstrualPhase.foodGroups;
const follicularFoods = follicularPhase.foodGroups;
const ovulatoryFoods = ovulatoryPhase.foodGroups;
const lutealFoods = lutealPhase.foodGroups;

