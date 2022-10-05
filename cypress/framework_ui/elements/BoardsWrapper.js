/** Boards Wrapper */

export default { 
    getBoard(name) {
        const field = cy.get('.boardTitle')
        field.contains(name)
        return this
    },
    addButton() {
        return cy.get('[data-test="create-new"]').click({force: true})
    },
    addColumn() {
        return cy.get('[data-test="add-column"]').click()
    },
    createColumn() {
        return cy.get('[data-test="add-column"]').click()
    },
    getColumnName() {
        return cy.get('[data-testid="edit-title"').click()
    },
    fillColumnName(name) {
        const field = cy.get('[data-testid="edit-title"')
        field.type(name)
        return this
    },
    createBtn() {
        return cy.get('[data-testid="save-title"]').click()
    },

    chooseLanes(name) { 
        return cy.get('.MuiList-root').contains(name).click()
    },
    clickBtn(name) { 
        return cy.get('.MuiButton-label').contains(name).click()
    },

    collapseBoard() {
        return cy.get('[data-test="collapse-board-button"] > .MuiButton-label > .MuiSvgIcon-root').click({force: true})
    },
    boardHeader(text) { 
        return cy.get('[data-test="board-header-cards-count"]').contains(text)
    }
}  