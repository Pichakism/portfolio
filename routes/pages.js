const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/fashion', (req, res) => {
  res.render('fashion');
});

router.get('/travel', (req, res) => {
  res.render('travel');
});

router.get('/single', (req, res) => {
  res.render('single');
});

router.get('/photography', (req, res) => {
  res.render('photography');
});

module.exports = router;
