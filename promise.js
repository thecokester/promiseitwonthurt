require('es6-promise');

  (function() {
  var firstPromise, secondPromise;

  firstPromise = first();

  secondPromise = firstPromise.then(function(value) {
    return second(value);
  });

  secondPromise.then(console.log);
  
  
  })
// As an alternative to the code above, ou could also do this:
    // first().then(second).then(console.log);
  