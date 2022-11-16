import { useLocation } from "react-router-dom";
import img from "./img/not-found.jpg";
import styles from "./NotFound.module.css";

export default function NotFound() {
  let location = useLocation();

  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt="Not found" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </div>
  );
}
