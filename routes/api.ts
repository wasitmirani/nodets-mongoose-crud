import express, { Request, Response, NextFunction } from 'express';
import { UserController } from '../controllers/user.controller';



let route = express.Router();
const user_controller = new UserController();



// Home page route.
route.get('/', function (req, res) {
    res.send('Wiki home page');
});
route.get('/users',user_controller.getUsers);
route.post('/user',user_controller.create);
route.delete('/user/:uid',user_controller.destroy);
  




// Export the router
export  = route;

