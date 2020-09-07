const MusicByTemperatureController = require('../controllers/MusicByTemperatureController');
const StatisticsController = require('../controllers/StatisticsController');

const router = require('express').Router();

router.get("/music/:city",MusicByTemperatureController.getMusicByWeather);
router.get('/statistics',StatisticsController.getStatistics);

module.exports = router;