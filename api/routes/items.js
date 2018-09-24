var express = require('express')
var router = express.Router({mergeParams: true})  // merge params for use as a child route
const mongoose = require('mongoose');
const Item = require('../models/Item.js');

/* GET /items listing. */
router.get('/', (req, res, next) => {
  Item.find().sort({ updatedAt: -1 }).exec((err, items) => {
    if (err) return next(err);
    res.json(items);
  });
});

/* GET /items/id */
router.get('/:id', (req, res, next) => {
  Item.findById(req.params.id, (err, item) => {
    if (err) return next(err);
    res.json(item);
  });
});

module.exports = router