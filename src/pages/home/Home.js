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
        name,
        localized_name,
        id,
        img,
      };
    });

    const realHeroesList = heroesList.slice(0, -10);
    

    setHeroes(realHeroesList);
  };

  useEffect(() => {
    getResource(API_HEROES);
  }, []);

  return <div className={styles.container}>{heroes && <HeroList heroes={heroes} />}</div>;
};

export default Home;
