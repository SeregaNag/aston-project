import { Link } from "react-router-dom";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>CHOOSE YOUR HERO</h1>
        
          <p className={styles.text}>
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and limitlessly diverse. Unleash incredible
            abilities and devastating ultimates on your way to victory.
          </p>
          <Link to="/heroes">To heroes</Link>
      </div>
    </>
  );
}
