var _ = require('underscore');

function ipnHandler(req, res) {
  console.log('Paypal POST: ', req.params, req.body);

  res.send();
}

module.exports = {
  ipnHandler: ipnHandler
};