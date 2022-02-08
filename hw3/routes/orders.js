var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var orders = [{topping: "cherry", quantity: "2"}, {topping: "plain", quantity: "6"}, {topping: "chocolate", quantity: "3"}];
    var stringOrders = JSON.stringify(orders);

    res.send(stringOrders);
});

router.post('/', (req, res, next) => {
    var body = req.body;
    console.log("Month: " + body.month);
    var orders = [{topping: "cherry", quantity: "2"}, {topping: "plain", quantity: "6"}, {topping: "chocolate", quantity: "3"}];
    var stringOrders = JSON.stringify(orders);

    res.send(stringOrders);
})
  
module.exports = router;


