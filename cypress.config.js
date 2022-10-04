require('dotenv').config()

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      config.env = process.env
      return config
    },
  defaultCommandTimeout: 30000,
  viewportWidth: 1350,
  viewportHeight: 600,
  },
  env: {
    LOGIN: process.env.CYPRESS_LOGIN,
    PASSWORD: process.env.CYPRESS_PASSWORD
  }
}