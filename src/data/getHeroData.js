import { HERO_IMAGE_URL } from "../constants/api";

const getName = (name) => {
  const heroName = name.replace("npc_dota_hero_", "");
  return heroName;
};

export const getHeroName = (name) => getName(name);

export const getHeroImage = (heroName) => `${HERO_IMAGE_URL}/${heroName}.png`;
