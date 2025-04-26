const User = require ("/home/bandaman/jawabu-mern/server/models/User.js")
const bcrypt = require ("bcryptjs");
const jwat= require ("jsonwebtoken");


const registerUser = async(req, res)=> {
    const {userName, userEmail, password, role} = req.body;

    const existingUser = await User.findOne({$or : [{userEmail}, {userName}]});

    if(existingUser){
        return res.status(400).json({
            success:false,
            message: "user name or email already exist"
        })
    };

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({userName, userEmail, role, password : hashPassword})

    await newUser.save();

    return res.status(201).json({
        success: true,
        message:"User registered successfully",
    });
};

const loginUser = async(req, res) =>{
    const {userEmail, password} = req.body;
    const checkUser = await User.findOne({userEmail});
    if(!checkUser || !(await bcrypt.compare(password, checkUser.password)))
    return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
    });
};
  
const accessToken = jwt.sign({
    _id: checkUser._id,
    userEmail: checkUser.userEmail,
    userName: checkUser.userEmail,
    role: checkUser.role,
}, 'JWT_SECRET', {expiresIn : '100m'}) 

res.status(200).json({
    success: true,
    message: 'Logged in successfully',
    data : {
        accessToken,
        user : {
    _id: checkUser._id,
    userEmail: checkUser.userEmail,
    userName: checkUser.userEmail,
    role: checkUser.role,
        }
    }
});

const checkAuth = 

module.exports = { registerUser, loginUser };

