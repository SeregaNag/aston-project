import styles from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={styles.text}>
      The ancient has been destroyed. <br />
      We cannot display data. <br />
      Come back later.
    </p>
  );
}
