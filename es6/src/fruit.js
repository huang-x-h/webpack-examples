import Apple from './modules/apple'
import Banana from './modules/banana'

export default class Fruit {
  constructor() {
    this.fruits = [new Apple(), new Banana()]
  }

  echo() {
    this.fruits.forEach(function(fruit) {
      fruit.echo()
    })
  }
}