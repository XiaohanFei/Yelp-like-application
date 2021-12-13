const express = require('express');
const router = express.Router();

const categoryController = require('../controller/category')
const photoController = require('../controller/photo')
const placeController = require('../controller/place')
const reviewController = require('../controller/review')

router.post('/category', categoryController.createcategory)
router.put('/category', categoryController.updatecategory)
router.delete('/category', categoryController.deletecategory)

router.post('/photo', photoController.createphoto)
router.put('/photo', photoController.updatephoto)
router.delete('/photo', photoController.deletephoto)

router.get('/search', placeController.search)
router.post('/place', placeController.createplace)
router.put('/place', placeController.updateplace)
router.delete('/place/:place_id', placeController.deleteplace)

router.post('/review', reviewController.createreview)
router.put('/review', reviewController.updatereview)
router.delete('/review/:review_id', reviewController.deletereview)


module.exports = router;