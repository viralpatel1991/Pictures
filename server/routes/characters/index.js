const characters = require('express').Router();
const search = require('./search');
characters.get('/', search);

module.exports = characters;
