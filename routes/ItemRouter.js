const Router = require('express').Router()
const controller = require('../controllers/AlbumController')

Router.post('/create-album', controller.CreateAlbum)
Router.get('/get-albums', controller.GetAlbums)

Router.get(
  '/get-album-by-name-and-artist/:artist/:name',
  controller.GetAlbumByNameAndArtist
)
Router.get('/get-fav-list/:user_id', controller.GetFavList)
Router.post('/create-favlist/:user_id/:album_id', controller.CreateFavList)

module.exports = Router
