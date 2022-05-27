import React from "react";
import PropTypes from "prop-types";
import { UserModel } from "../../models/UserClass";

const UserPure = ({ user }) => {
  return (
    <div>
      <h2>Nombre: {user.name}</h2>
      <h3>Identificación: {user.identification}</h3>
      <h3>Rol: {user.role}</h3>
    </div>
  );
};

UserPure.propTypes = {
  user: PropTypes.instanceOf(UserModel),
};

export default UserPure;
