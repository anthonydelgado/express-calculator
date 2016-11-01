# Express Calculator
### A simple calculator written in Node
## Instructions
You will create an express calculator application with one get route that is able to take in three parameters: An operation and two numbers.
There are four operation values which a user may use: Addition, Subtraction, Multiplication, and Division.
When the route is hit, your browser should display the result of the math operation and the numbers two numbers on the screen.
For Example: When the user goes to the url http://localhost:3000/addition/10/1, the page should display 11.

## Checkout my Route Code

```
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
```
## Try it on Heroku 

[/add/1/100](https://lit-atoll-58093.herokuapp.com/add/1/100)
[/subtract/1/100](https://lit-atoll-58093.herokuapp.com/subtract/1/100)
[/times/15/121](https://lit-atoll-58093.herokuapp.com/times/15/121)
[/divide/98/609](https://lit-atoll-58093.herokuapp.com/divide/98/609)







