const express = require('express');
const {protect, restrictTo} = require('../controllers/authController');
const {getAllReviews,createReview} = require('../controllers/reviewController');
const router = express.Router();

router.route('/').get(protect,getAllReviews).post(protect,createReview);

module.exports = router;