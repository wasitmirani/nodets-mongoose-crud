import express, { Request, Response, NextFunction } from 'express';



let route = express.Router();



// Home page route.
route.get('/', function (req, res) {
    res.send('Wiki home page');
});
  

route.get('/users',)


// Export the router
export  = route;

