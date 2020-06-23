const router = require('express').Router();

const {
  getPaintings,
  addPainting,
  getArtistPaints,
} = require('../controllers');
const { verifyArtist } = require('../controllers/middleware/verifyUser');

router.get('/paintings/:category', getPaintings);
router.get('/paintingsArtist/:artistId', getArtistPaints);

// Only artist endPoints
router.use(verifyArtist);

router.post('/painting', addPainting);

module.exports = router;
