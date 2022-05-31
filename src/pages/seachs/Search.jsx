import React from "react";
import UserList from "../../components/userList/UserList";
import "../auth/login/styles/_loginStyle.scss";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <>
      <div className="head-search">
        <h1 className="title-search">Busca lo que necesites</h1>
        <div className="container-label-search">
          <div className="search-label">
            <p>Buscar</p> <SearchIcon />
          </div>
          <input className="input-login" type="text" />
        </div>
      </div>
      <div className="div body-search">
        <UserList />
      </div>
    </>
  );
};

export default Search;
