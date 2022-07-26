import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { UserProvider } from "./UserProvider";

//? Verificar si el componente se esta renderinzando
test("renders content", () => {
  const view = render(<UserProvider />);
  console.log(view);
});
