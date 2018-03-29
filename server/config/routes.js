const personController = require('./../controllers/person');

module.exports = (app) => {
  app.get('/', (req, res) => {
    personController.show_all(req, res);
  })
  app.get('/new/:name/', (req, res) => {
    personController.add_name(req, res);
  })
  app.get('/:name/', (req, res) => {
    personController.person_info(req, res);
  })
  app.get('/remove/:name/', (req, res) => {
    personController.delete_name(req, res);
  })
}
