describe("Funcionalidad de newsletter", ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        cy.wait(500)
    })

    it("permite al usuario suscribirse a la newsletter correctamente", ()=>{
        cy.getByData("email-input").type("francis@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("francis@aol.com")
    })

    it("no permite al usuario utilizar un email invalido",()=>{
        cy.getByData("email-input").type("francis")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it.only("los usuarios ya inscritos no pueden inscribirse otra vez",()=>{
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("already exists. Please use a different email address.")
    })
})