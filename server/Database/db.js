const User = require("../Models/User")
const mongoose = require("mongoose");
const Connection = async () => {
<<<<<<< HEAD
    const URL = "mongodb://127.0.0.1:27017/Puneet";
    // const URL = "mongodb+srv://triprabhat__001:nXDTCmoV8gNammwq@quiz-app.tckswf5.mongodb.net";
=======
    //const URL = "mongodb://127.0.0.1:27017/QuizNest";
    const URL = "mongodb+srv://triprabhat__001:nXDTCmoV8gNammwq@quiz-app.tckswf5.mongodb.net";
>>>>>>> 1b7c282f41ff34419006ec2fd72f7a44f18eac41
    try {
        const db = await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database', error);
    }
}

module.exports = Connection;