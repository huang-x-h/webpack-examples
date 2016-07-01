define(function() {
  var Apple = function() {
  }

  Apple.prototype = {
    echo: function() {
      console.log('I am an Apple.')
    }
  }

  return Apple
})
