var express = require('express');
var router = express.Router();

// There are four operation values which a user may use: Addition, Subtraction, Multiplication, and Division.
//     When the route is hit, your browser should display the result of the math operation and the numbers two numbers on the screen.
//     For Example: When the user goes to the url http://localhost:3000/addition/10/1, the page should display 11.

/* GET home page. */
router.get('/:operation/:value1/:value2', function(req, res, next) {

  console.log(req.params.operation);
  var var1 = parseInt(req.params.value1);
  var var2 = parseInt(req.params.value2);

  switch(req.params.operation) {
    case 'add':
      var answer = var1 + var2;
      res.render('index', { title: 'The answer is ' + answer });
      break;
    case 'subtract':
      var answer = var1 - var2;
      res.render('index', { title: 'The answer is ' + answer });
      break;
    case 'times':
      var answer = var1 * var2;
      res.render('index', { title: 'The answer is ' + answer });
      break;
    case 'divide':
      var answer = var1 / var2;
      res.render('index', { title: 'The answer is ' + answer });
      break;
    default:
      res.render('index', { title: 'Express' });
  }

});

module.exports = router;
