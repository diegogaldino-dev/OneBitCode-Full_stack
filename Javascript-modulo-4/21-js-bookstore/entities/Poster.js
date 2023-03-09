const Product = require("./Product");

module.exports = class Poster extends Product{
  constructor(name, descrition, height, width, price, inStock = 0){
    super(name, descrition, price, inStock) 
    this.height = height
    this.width = width

  }
}