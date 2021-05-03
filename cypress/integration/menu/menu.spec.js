const {MENU_HOME_BUTTON} = require("../../elements/menu");

context('Menu', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('should load menu', () => {
        // Then the menu home button should contain HOME
        cy.get(MENU_HOME_BUTTON).contains('HOME')
    })
})
