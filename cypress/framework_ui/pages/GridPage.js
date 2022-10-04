/**Page Object - Grid Page in FlowFast.io*/

export default {
    visit() {
      cy.visit('https://fox770test.flowfast.io/space/69428/grid')
    },

    getCreateCard(line) {
        return cy.get('[data-test="some"]').contains(line).click()
    },
    addCardTitle(name) {
        const field = cy.get('[placeholder="Card title"]')
        field.type(name)
        return this
    },
    clickCreateBtn() {
        return cy.get('[title="Create"] > .MuiIconButton-label > .MuiSvgIcon-root').click()
    }
}    




