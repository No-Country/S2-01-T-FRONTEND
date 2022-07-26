import React, { useState, useEffect } from "react";
import UserList from "../../components/userList/UserList";
import "../auth/login/styles/_loginStyle.scss";
import SearchIcon from "@mui/icons-material/Search";
import getClient from "../../services/getClient";

const Search = () => {
  const [search, setSearch] = useState([""]);

  const handleInput = (e) => {
    setSearch(e.target.value);
    filterClient(e.target.value);
    console.log(search);
  };

  const [dataClient, setDataClient] = useState([]);
  const [dataCard, setDataCard] = useState([]);

  const filterClient = (aBuscar = "") => {
    const resultFilter = dataCard.filter((element) => {
      console.log(element.name);
      if (
        element.firstName
          .toString()
          .toLowerCase()
          .includes(aBuscar.toLowerCase()) ||
        element.country.toString().toLowerCase().includes(aBuscar.toLowerCase())
      ) {
        return element;
      }
      return null;
    });
    setDataClient(resultFilter);
  };

  useEffect(() => {
    document.title = "elFiado.com | Buscar";
    async function load() {
      const response = await getClient();
      setDataCard(response);
      setDataClient(response);
    }
    load();
  }, []);

  return (
    <>
      <div className="head-search">
        <h1 className="title-search">Busca lo que necesites...</h1>
        <div className="container-label-search">
          <div className="container-lbl-s">
            <label className="lbl-search">Buscar</label>{" "}
            <SearchIcon className="icon-search" />
          </div>
          <input
            value={search}
            onChange={handleInput}
            className="input-search"
            type="text"
          />
        </div>
      </div>
      <div className="body-search">
        <UserList buscar={dataClient} />
      </div>
    </>
  );
};

export default Search;
