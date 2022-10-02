const { faker } = require('@faker-js/faker');

/** Create new Board in FlowFast Developers API */

const BuildBoard = function () {
  this.addTitle = function () {
    this.title = faker.name.firstName()
    return this
  },
  this.addCover = function () {
    this.first_image_is_cover = faker.image.city()
    return this
  },
  this.addColumns = function () {
    this.columns = []
    return this
  },
  this.addLanes = function () {
    this.lanes = []
    return this
  }
}

export default BuildBoard;


export const updatedBoard = {
    title: faker.name.firstName(),
    first_image_is_cover: faker.image.city()
 };
 
export const newBoard = {
    title: "Richardson",
    columns: [],
    lanes: []
 };

export const boardByTariff = {
    title: "Richardson",
    lanes: [1, 2, 3]
 };