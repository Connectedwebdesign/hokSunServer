const express = require('express');
const httpContext = require('express-http-context');

const router = express.Router();

router.use(httpContext.middleware);
router.use(require('../middlewares/paginate'));

router.get('/client-feedback', require('./../controllers/clientFeedback/getList'))
router.get('/coach', require('./../controllers/coach/getList'))
router.get('/coach/:id', require('./../controllers/coach/getDetail'));

module.exports = router;
