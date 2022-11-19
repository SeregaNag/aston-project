import { useNavigate } from "react-router-dom";
import styles from "./PersonLingBack.module.css";
import iconBack from './img/back.png'

export default function PersonLinkBack() {
    const navigate = useNavigate()

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1)
  };
  return (
    <a href="#" onClick={handleGoBack} className={styles.link}>
        <img className={styles.link__img} src={iconBack} alt='go back'></img>
      <span>Go back</span>
    </a>
  );
}
