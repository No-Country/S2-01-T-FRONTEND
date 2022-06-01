import React from "react";
import { ROLES } from "../../models/roleModels";
import { UserModel } from "../../models/UserClass";
import UserPure from "../../pures/userPure/UserPure";

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
