const getArtist = require('./getArtist');
const { getUserProfile } = require('./getUserProfile');
const activateArtist = require('./activateArtist');
const updateUserInfo = require('./updateUserInfo');
const getAllArtist = require('./getAllArtist');
const updateArtistAvatar = require('./updateArtistAvatar');
const updateArtist = require('./updateArtist');
const getAdminData = require('./getAdminData');

module.exports = {
  getArtist,
  getUserProfile,
  getAllArtist,
  activateArtist,
  updateArtistAvatar,
  updateArtist,
  updateUserInfo,
  getAdminData,
};
