const express = require('express');

const OngController = require('./controllers/OngController');
const Incidentcontroller = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/incidents', Incidentcontroller.index)
routes.post('/incidents', Incidentcontroller.create);
routes.delete('/incidents/:id', Incidentcontroller.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create)


module.exports = routes;