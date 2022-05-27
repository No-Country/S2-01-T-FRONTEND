import { ROLES } from "./roleModels";

export class UserModel {
  name = "";
  idType = "";
  identification = "";
  role = ROLES.CLIENT;
  address = "";
  city = "";
  country = "";

  constructor(name, idType, identification, role, address, city, country) {
    this.name = name;
    this.idType = idType;
    this.identification = identification;
    this.role = role;
    this.address = address;
    this.city = city;
    this.country = country;
  }
}
