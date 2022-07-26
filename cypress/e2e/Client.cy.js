describe("Client.cy.js", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Login can be apened", () => {
    cy.contains("Acceder").click();
  });

  it("User can be Login", () => {
    cy.contains("Acceder").click();
    cy.get("input:first").type("juaco@gmail.com");
    cy.get('[name="password"]').last().type("12345678");
    cy.contains("Ingresar").click();
  });
});
