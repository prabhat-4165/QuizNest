const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
//   createdQuizes: [
//     {
//       quiz: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Quiz'
//       },
//       allowedUsers: {
//         type: Array,
//         of: mongoose.Schema.ObjectId
//       },
//       isResultPublished: {
//         type: Boolean,
//         default: false,
//       }
//     }
//   ]
});

const Admin = mongoose.model("Admin", adminSchema);
// export default Admin;
module.exports = Admin