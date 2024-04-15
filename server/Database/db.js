const User = require("../Models/User")
const mongoose = require("mongoose");
const Connection = async () => {
    // const URL = "mongodb+srv://deepakduvesh356:j5wspvQAMesrOExH@cluster0.orqxx2g.mongodb.net/"
    const URL = "mongodb+srv://triprabhat__001:nXDTCmoV8gNammwq@quiz-app.tckswf5.mongodb.net";
    try{
        const db = await mongoose.connect(URL);
        console.log('Database connected successfully');

        // const users = await User.findOne({email: "user@gmail.com"})
        // const c = await db.Collection("users")
        // console.log(c)
    } catch(error){
        console.log('Error while connecting to the database', error);
    }
}

module.exports = Connection;