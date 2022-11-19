import styles from "./Favourite.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import HeroList from "../../components/HeroList";

export default function Favourite() {
  const [heroes, setHeroes] = useState([]);

  const storeData = useSelector((state) => state.favouriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          localized_name: item[1].name,
          id: item[0],
          img: item[1].img,
        };
      });

      setHeroes(res);
    }
  }, []);

  return (
    <div>
      {heroes.length ? (
        <HeroList heroes={heroes} />
      ) : (
        <h1 className={styles.comment}> No favourites</h1>
      )}
    </div>
  );
}
