import PropTypes from "prop-types";
import styles from "./HeroMatches.module.css";
import { getApiResource } from "../data/dataFetch";
import { useState, useEffect } from "react";
import { HERO_MATCHES_URL } from "../constants/api";

export default function HeroMatches({ currentId }) {
  const [heroMatches, setHeroMatches] = useState(null);
  

  useEffect(() => {
    (async () => {
      const response = await getApiResource(HERO_MATCHES_URL);

      const matches = response.map(function (obj) {
        return {
          "Pro picks": obj.pro_pick,
          "Pro ban": obj.pro_ban,
          "Pro win rate": ((obj.pro_win / obj.pro_pick) * 100).toFixed(2),
        };
      });

      setHeroMatches(function showStats() {
        for (let item of matches) {
          return Object.entries(
            matches[currentId >= 25 ? currentId - 2 : currentId - 1]
          ).map((person) => {
            return (
              <li key={person.toString()} className={styles.list__item}>
                <span>{person[0] + ": " + person[1]}</span>
              </li>
            );
          });
        }
      });
    })();
  }, [currentId]);

  return <ul className={styles.list}>{heroMatches}</ul>;
}

HeroMatches.propTypes = {
  currentId: PropTypes.string,
};
