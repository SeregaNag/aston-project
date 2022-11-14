import styles from "./HeroList.module.css";

export default function HeroList({ heroes }) {
  return (
    <ul className={styles.list__container}>
      {heroes.map(({ localized_name, id, img }) => (
        <li className={styles.list__item} key={id}>
          <a href="#">
            <img
              className={styles.hero__photo}
              src={img}
              alt={localized_name}
            />
            <p>{localized_name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
