const express = require('express');
const contactsController = require('../controllers/contacts.controller');


const router = express.Router();

router.get('/', contactsController.getContactsByFilter);
router.post('/', contactsController.createContact);
router.delete('/', contactsController.deleteAllContacts);


router.get('/:id', contactsController.getContact);
router.put('/:id', contactsController.updateContact); // Add this line for PUT /api/v1/contacts/{id}
router.delete('/:id', contactsController.deleteContact);


module.exports = { setup: (app) => app.use('/api/v1/contacts', router) };