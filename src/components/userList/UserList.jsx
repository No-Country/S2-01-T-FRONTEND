import React, { useEffect, useState } from "react";
import { ROLES } from "../../models/roleModels";
import { UserModel } from "../../models/UserClass";
import UserPure from "../../pures/userPure/UserPure";
import { getClient } from "../../services/getClient";

const UserList = () => {
  const defaultUser = new UserModel(
    "Jaime",
    "CC",
    "1081785714",
    ROLES.CLIENT,
    "Ciudad Sabana",
    "Mosquera",
    "Colombia"
  );

  return (
    <div>
      <UserPure user={defaultUser} />
    </div>
  );
};

export default UserList;
