import dotenv from 'dotenv'

dotenv.config();

export default {
    login: Cypress.env('LOGIN'),
    password: Cypress.env('PASSWORD')
  }