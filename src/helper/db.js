import mongoose from "mongoose";
import { User } from "../models/user";
export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: 'work_manager'
        });
        console.log(connection.host);

        // const addUser = new User({
        //     name: 'rohit',
        //     email: 'rohit@gmail.com',
        //     phone: 8411981996
        // })
        // await addUser.save();



    }
    catch (error) {
        console.log(error)
    }
}
