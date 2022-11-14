import styles from "./Home.module.css";
import { getApiResource } from "../../data/dataFetch";
import { useState, useEffect } from "react";
import { API_HEROES } from "../../constants/api";
import { getHeroName, getHeroImage } from "../../data/getHeroData";
import HeroList from "../../components/HeroList";

const Home = () => {
  const [heroes, setHeroes] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    const heroesList = res.map(({ name, localized_name, id }) => {
      const heroName = getHeroName(name);
      const img = getHeroImage(heroName);
      return {
        localized_name,
        id,
        img,
      };
    });

    setHeroes(heroesList);
  };

  useEffect(() => {
    getResource(API_HEROES);
  }, []);

  return <div>{heroes && <HeroList heroes={heroes} />}</div>;
};

export default Home;
