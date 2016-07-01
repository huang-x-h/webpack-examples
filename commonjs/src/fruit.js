var Apple = require('./modules/apple')
var Banana = require('./modules/banana')

var Fruit = function() {
  this.fruits = [new Apple, new Banana]
}

Fruit.prototype = {
  echo: function() {
    this.fruits.forEach(function(fruit) {
      fruit.echo()
    })
  }
}

module.exports = Fruit
