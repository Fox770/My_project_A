/** Edit Card */

export default {
    getBoardByTitle(title) {
        return cy.get('[data-test="board-container"]').contains(title)
      },
    getCardById(cardId) {  
        return cy.get(cardId).click()
      }, 
    leaveComment(comment) {
        const field = cy.get('.editor')
        field.type(comment)
        return this
      },
    sendBtn() {
        return cy.get('[data-test="save-comment-btn"]').click() 
      }
}  