define(function() {
  var Banana = function() {
  }

  Banana.prototype = {
    echo: function() {
      console.log('I am a Banana.')
    }
  }

  return Banana
})
