const { faker } = require('@faker-js/faker');

/** Create new Space in FlowFast Developers API */

const BuildSpace = function () {
  this.addTitle = function () {
    this.title = faker.name.lastName()
    return this
  }
  this.addCardTypeId = function () {
    this.allowed_card_type_ids = faker.random.numeric([])
    return this
  }
  this.addExternalId = function () {
    this.external_id = faker.random.numeric()
    return this
  }
}

export default BuildSpace;

export const newSpace = {
   title: faker.name.lastName(),
   external_id: faker.random.numeric(),
   allower_card_type_ids: faker.random.numeric([]),
};

export const SpaceId = {
  title: faker.name.lastName(),
  external_id: faker.random.numeric(),
};