describe("ordering sushi and payment", () => {
  it("should buy two products", () => {
    cy.visit("http://localhost:3000/menu").then(() => {
      //should add two items to the cart and go to the cart
      cy.get("div[data-test-id='zenbu-nigiri-card']").should("be.visible");
      cy.get("div[data-test-id='kenbishi-sake-card']").should("be.visible");

      cy.wait(2000).then(() => {
        cy.get("p[data-test-id='add-zenbu-nigiri']").click({ force: true });
        cy.get("p[data-test-id='add-kenbishi-sake']").click({ force: true });
      });

      cy.get("a[role='cart']").click({ multiple: true, force: true });

      //should click on checkout
      cy.get("button[role='checkout']").click();
      cy.wait(30000).then(() => {
        //should fill in the checkout form
        cy.get("input#Field-emailInput").type("pasztorg05@gmail.com");
        cy.get("input#Field-nameInput").type("Gergő Pásztor");
        cy.get("input#Field-postalCodeInput ").type("453-0022");
      });

      //should return to the home page
    });
  });
});
