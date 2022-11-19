import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "./img/dota.png";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
        </li>

        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <Link to="/heroes">Heroes</Link>
            </li>
            <li>
              <Link to="/favourite">Favourite</Link>
            </li>
          </>
        )}

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
