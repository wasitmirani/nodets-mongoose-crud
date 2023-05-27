
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
const user_ = new User();
export class UserController {
    
     
      async  getUsers(req: Request, res: Response,next:NextFunction): Promise<Response | any>{
        // try {
          const users = await user_.allUsers();
          res.json(users);
        // } catch (error) {
          // res.status(500).json({ error: 'Internal server error' });
        // }
        }

}