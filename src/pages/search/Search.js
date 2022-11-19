import { useState } from "react";
import { getApiResource } from "../../data/dataFetch";
import styles from "./Search.module.css";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const getResponse = async (param) => {
    const res = await getApiResource;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
    getResponse(value);
  };

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Input hero name"
      ></input>
    </div>
  );
}
