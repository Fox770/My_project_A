/**Add Button on header to create cards and boards in FlowFast.io*/

export default {
    clickBtnOnTop(name) {
      return cy.get('.MuiButton-outlinedPrimary').contains(name).click() 
    }, 

    createItem(name) {
      return cy.get('.MuiList-root').contains(name).click() 
    },  
    
    addCardTitle(name) {
      const field = cy.get('[rows="1"]')
      field.type(name)
      return this
    },  
    clickBtn(name) {
      return cy.get('.MuiButton-textPrimary').contains(name).click() 
    }
}