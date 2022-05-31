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
          <label className="lbl-search">Buscar</label>{" "}
          <SearchIcon className="icon-search" />
          <input className="input-search" type="text" />
        </div>
      </div>
      <div className="body-search">
        <UserList />
      </div>
    </>
  );
};

export default Search;
