
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { IUser } from '../interfaces/IUser';
import { helpers } from '../helpers/helper';
const user_ = new User();
const helper = new helpers();
export class UserController {


  async getUsers(req: Request, res: Response, next: NextFunction): Promise<Response | any> {
    try {
      const users = await user_.users();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      req.body.uid = helper.get_uuid();
      let newUser: IUser = req.body;
      user_.store(newUser).then((user)=>{
        console.log(user);
        res.status(201).json({'message':'user has been created successfully',user:user});
      }).catch((error)=>{
        res.status(500).json({ error:error }); // 
      });     
    } catch (error) {
      console.error('Failed to read users:', error);
      res.status(500).json({ error: 'Failed to read users' }); // Send an error response in case of failure
    }
    // res.status(500).json({ error: 'message' });

  }

}