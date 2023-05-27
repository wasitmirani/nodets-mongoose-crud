import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";
import userSchema from "../database/Schema/UserSchema";
import connect from "../config/mongoconnector";


export class  User {


    private UserModel = mongoose.model<IUser>('User', userSchema);
    
    constructor() {    
        connect(); //returns a mongodb connection object.
        this.UserModel;
    }   
    
     async allUsers(): Promise<IUser[]> {
        const users = await this.UserModel.find();
        if(users.length>0)
            return users;
        return null;
     }
    


}