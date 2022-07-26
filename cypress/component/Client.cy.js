describe("Client.cy.js", () => {
  it("Frontpage can be apened", () => {
    cy.visit("http://localhost:3000/");
  });
});
