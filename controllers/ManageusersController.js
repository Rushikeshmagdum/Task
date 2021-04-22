const UserModel = require('../models/UserModel');
const UserTypeModel = require('../models/UserTypeModel');
const apiRes = require('../helpers/apiResponse');
const superAdminSideBarItems = require('../config/user_routes/superadmin').sideBarItems;


class ManageusersController{
    /**
     * 1.Method To Render Products Page
    */   
   renderPage = [
       async(req, res)=>{
           return res.render('manageusers/index');
       }
   ];
   createUser =[
    async(req, res)=>{
        try {
          let newUser = await new UserModel(req.body).save();
      
          return res.send(newUser).status(201);
        } catch (err) {
          return res.send(err.message).status(500);
        }
      }
   ];
   getAllUsers=[
    async(req, res)=>{
        try {
          let users = await UserModel.find();
          return res.send(users).status(200);
          
        } catch (err) {
          return res.send(err.message).status(500);
        }
      }
      
   ];
   editUser=[
    async(req, res)=>{
        try {
          let user = await UserModel.findOneAndUpdate({_id: req.params.userId}, {$set: req.body}, {new: true});
          return res.send(user).status(201);
        } catch (err) {
          return res.send(err.message).status(500);
        }
      }
   ];
   deleteUser=[
    async(req, res)=>{
        try {
          await UserModel.findOneAndDelete({_id: req.params.userId});
          return res.sendStatus(200);
        } catch (err) {
          return res.send(err.message).status(500);
        }
      }
   ];


}

module.exports = new ManageusersController();