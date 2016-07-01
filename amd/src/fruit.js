define([
  './modules/apple',
  './modules/banana'
], function(Apple, Banana) {
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

  return Fruit
})
