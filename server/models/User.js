
const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    password: String,
    role:String,

    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User',userSchema);
