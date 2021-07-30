const express = require('express') ; 
const router = express.Router() ; 
const clientDetailsController = require('../controllers/client.details.controller') ; 


router.post('/details/add',clientDetailsController.addClientDetails) ;
router.get('/details/:id',clientDetailsController.getClientDetails) ;  


module.exports = router ; 
