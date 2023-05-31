import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";
import userSchema from "../database/Schema/UserSchema";
import connect from "../config/mongoconnector";


export class User {


    private UserModel = mongoose.model<IUser>('User', userSchema);

    constructor() {
        connect(); //returns a mongodb connection object.
        this.UserModel;
    }

    users = async () => {
        const users = await this.UserModel.find();
        console.log("users: ", users);
        if (users.length > 0)
            return users;
        return null;
    }
    async delete(uid:string){
            const   result=await this.UserModel.deleteOne({ uid: uid })
            if (result.deletedCount === 0) {
                return { status: false };
            } else {
                return {  status: true };
            }

    }
    async  checkUser(email:string)  {
        try {
          const foundUser = await this.UserModel.findOne({ email: email });
          if (foundUser?.email) {
            return { user: foundUser, status: false };
          }
          return { user: null, status: true };
        } catch (error) {
          console.error("Error:", error);
          throw error;
        }
      }
    store = async (user: IUser) => {   //store user in db.  returns the user object.  returns null if there is an error.
        const newUser = new this.UserModel({
            name: user.name,
            uid: user.uid,
            email: user.email,
            phone: user.phone,
            password: user.password,

        });
        const savedUser = await newUser.save();
        return savedUser;
    }



}