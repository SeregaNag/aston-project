import styles from "./HeroList.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function HeroList({ heroes }) {
  return (
    <ul className={styles.list__container}>
      {heroes.map(({ localized_name, id, img }) => (
        <li className={styles.list__item} key={id}>
          <Link to={`/heroes/${id}`}>
            <img
              className={styles.hero__photo}
              src={img}
              alt={localized_name}
            />
            <p>{localized_name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

HeroList.propTypes = {
  heroes: PropTypes.array,
};
