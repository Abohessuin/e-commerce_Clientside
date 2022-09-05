/// <reference types="Cypress" />
describe("User behaviour with  Property Page", () => {
  it("should test butt contain text filters", () => {
    cy.visit("/search#property");
    cy.get(".morefilterstest").then((butt) => {
      expect(butt.text()).to.equal("Filters");
    });
  });

  it("should test that size menu contain filters ", () => {
    cy.visit("/search#property");
    cy.wait(300);
    cy.get(".filtername").first().click({ force: true });
    cy.wait(3000);
    cy.get(".filtermenu ").should("be.visible");
    cy.get(".filtermenu button:nth-child(1)").contains("2' X 3'");
  });

  it("should test that size menu contain filters choose it and apply it ", () => {
    cy.visit("/search#property");
    cy.wait(300);
    cy.get(".filtername").first().click({ force: true });
    cy.wait(3000);
    cy.get(".filtermenu ").should("be.visible");
    cy.get(".filtermenu button:nth-child(1)").contains("2' X 3'");
    cy.get(".filtermenu  [data-cy=grap-one] button:nth-child(1)")
      .first()
      .click({
        force: true,
      });
    cy.wait(3000);
    cy.get(".filtercontainer > .filtermenu > .menufooter > :nth-child(1)")
      .first()
      .click({ force: true });
  });

  it("should test that size menu contain filters choose it and apply it ", () => {
    cy.visit("/search#property");
    cy.wait(300);
    cy.get(".filtername").first().click({ force: true });
    cy.wait(3000);
    cy.get(".filtermenu ").should("be.visible");
    cy.get(".filtermenu button:nth-child(1)").contains("2' X 3'");
    cy.get(".filtermenu  [data-cy=grap-one] button:nth-child(1)")
      .first()
      .click({
        force: true,
      });
    cy.wait(3000);
    cy.get(".filtercontainer > .filtermenu > .menufooter > :nth-child(1)")
      .first()
      .click({ force: true });
    cy.url({ timeout: 10000 }).should("include", "sizes=2x3");
  });

  it("should test that size menu contain filters choose it and apply it and then reset all the url deleted ", () => {
    cy.visit("/search#property");
    cy.wait(300);
    cy.get(".filtername").first().click({ force: true });
    cy.wait(1000);
    cy.get(".filtermenu ").should("be.visible");
    cy.get(".filtermenu button:nth-child(1)").contains("2' X 3'");
    cy.get(".filtermenu  [data-cy=grap-one] button:nth-child(1)")
      .first()
      .click({
        force: true,
      });
    cy.wait(1000);
    cy.get(".filtercontainer > .filtermenu > .menufooter > :nth-child(1)")
      .first()
      .click({ force: true });
    cy.url({ timeout: 10000 }).should("include", "sizes=2x3");
    cy.get(".resetbutt > button").click();
    cy.url({ timeout: 10000 }).should("not.include", "sizes=2x3");
  });

  it("should test first card landed  ", () => {
    cy.visit("/search#property");
    cy.get(":nth-child(1) > .lowerblock > .productname > p").then((butt) => {
      expect(butt.text()).to.equal("Mornadi Velvet Bed ");
    });
  });
});
