const error = require('./errorHandlers');
const auth = require('./auth');

const {
  getPaintings,
  getArtistPaints,
  addPainting,
  buyPaintings,
  deletePainting,
} = require('./paintings');

const { addPaintingToCart, deletePantingCart, getCart } = require('./cart');
const { addReview, getArtistReview } = require('./review');

const {
  getArtist,
  getAllArtist,
  activateArtist,
  getUserProfile,
} = require('./user');

module.exports = {
  getPaintings,
  getArtistPaints,
  auth,
  error,
  getUserProfile,
  deletePainting,
  getArtist,
  getAllArtist,
  activateArtist,
  getCart,
  addPaintingToCart,
  addPainting,
  deletePantingCart,
  addReview,
  getArtistReview,
  buyPaintings,
};
