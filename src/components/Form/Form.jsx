import React from "react";
import {useState} from "react";

export const Form = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form>
      <input
        type="search"
        placeholder="Busca tu pelicula favorita"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleClick}>
        Buscar
      </button>
    </form>
  );
};
