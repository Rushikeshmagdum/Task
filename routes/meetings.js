const MeetingsController = require('../controllers/MeetingsController');

const router = require('express').Router();

//Router To Render Products
router.get('/', MeetingsController.renderPage);

//Methot To Create New Product
router.post('/createMeeting',MeetingsController.createMeeting);

//method to get all Users
  router.get('/getAllMeetings',MeetingsController.getAllMeetings);

//method to Update Product
router.put('/editMeeting/:meetingId',MeetingsController.editMeeting);

//method to delete Product
router.delete('/deleteMeeting/:meetingId',MeetingsController.deleteMeeting);
  


module.exports = router;