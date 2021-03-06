const express = require('express')
const routes = express.Router()
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')


routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)
routes.delete('/ongs',ongController.delete)
routes.put('/ongs',ongController.update)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)

routes.get('/profiles',profileController.index)

routes.post('/session', sessionController.create)




module.exports = routes 