const error = require('./errorHandlers');
const { getArtistReview } = require('./review');
const auth = require('./auth');

const {
  getArtistPaints,
  getPaintings,
  addPainting,
  deletePainting,
} = require('./paintings');

const { addPaintingToCart, deletePantingCart, getCart } = require('./cart');
const {
  getAllArtist,
  activateArtist,
  getUserProfile,
  getArtist,
  updateArtist,
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
  updateArtist,
  deletePantingCart,
  getArtistReview,
};
