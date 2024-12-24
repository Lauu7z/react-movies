import React from "react";
import {useState} from "react";
import {FormStyled, SectionForm} from "./form-styles";

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
    <SectionForm>
      <header>
        <h1>Buscador de peliculas</h1>
      </header>
      <FormStyled>
        <input
          type="search"
          placeholder="Busca tu pelicula favorita"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleClick}>
          Buscar
        </button>
      </FormStyled>
    </SectionForm>
  );
};
