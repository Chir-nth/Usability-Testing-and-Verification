describe("Testing My Counter App", () => {
    const DELAY = 1500; //1.5 Seconds

    beforeEach(() => {
        cy.visit("/");
        cy.wait(DELAY);
    });

        describe("Checking the initial State ",() => {  
            it('should display the counter component', () => {
                cy.get('[data-testid="counter-component"]').should('be.visible');
                cy.wait(DELAY);

                cy.get('[data-testid="counter-value"]').should(
                    "contain",
                    "Value of Counter: 0",
                );
                cy.wait(DELAY);
            });
            it("Should have the input fields initialized to 0", () => {
                cy.get("[data-testid='value_inc']").should("have.value", "0");
                cy.wait(DELAY);

                cy.get("[data-testid='value_dec']").should("have.value", "0");
                cy.wait(DELAY);
            });
            it("should not render logs section initially", () => {
                cy.get('[data-testid="logs-section"]').should('not.exist');
                cy.wait(DELAY);
        });

        describe("Increase Counter", () => {
            it("should increase counter by entered value", () => {
                cy.get("[data-testid='value_inc']").clear().type("5");
                cy.wait(DELAY);

                cy.get("[data-testid='increase-button']").click();
                cy.wait(DELAY); 
                cy.get('[data-testid="counter-value"]')
                .should("contain", "Value of Counter: 5");
        
            });
            it("should increase counter multiple times", () => {
                // First increase by 10
                cy.get('[data-testid="value_inc"]').clear().type("10");
                cy.wait(DELAY);
                cy.contains("Increase").click();
                cy.wait
                cy.get('[data-testid="counter-value"]')
                .should("contain", "Value of Counter: 10");

                // Second increase by 25
                cy.get('[data-testid="value_inc"]').clear().type("25");
                cy.wait
                cy.contains("Increase").click();
                cy.wait(DELAY);
                cy.get('[data-testid="counter-value"]')
                .should("contain", "Value of Counter: 35");
            });

        });
    });           
});