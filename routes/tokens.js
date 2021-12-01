var express = require('express');
var router = express.Router();
var mapping = require('../mapping.js')
var template = require('../template.js')

router.get('/:id', function(req, res, next) {
  const index = parseInt(req.params.id)
  if (index < 1 || index > mapping.length ) {
    return res.json({}) // No metadata for non existing NFT
  }
  res.json({
    ...template,
    image: mapping[index - 1],
    })
});

module.exports = router;
