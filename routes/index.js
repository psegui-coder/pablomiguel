const express = require('express');
const router = express.Router();
const restaurant = require('../models/restaurant');
const { ensureAuth, ensureGuest } = require('../middleware/auth')
//@route get /
router.get('/', async (req, res) => {
    try{
        const restaurants = await restaurant.find().sort( { prating: -1 } ).limit(5).lean();
        res.render('home', {
            restaurants,
        })


   } catch (err) {
        console.error(err)
        res.render('error/400')

   }

})
// Login
//@route GET /
router.get('/login', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login',
        
    })
})
// @desc abaut
// @route GET /abaut
router.get('/about', (req, res) => {
    res.render('about')
})
//@route GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
      layout: 'backend', //show dashboard after login
    })
  })
// @route GET /About
router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;