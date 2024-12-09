const authModel = require("../schemas/authSchema");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//REGISTER USER
const registerUser = async(req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const salt =  await bcrypt.genSaltSync(10)
        const hashedPassword = await bcrypt.hashSync(password, salt);

        const isUserRegistered = await authModel.findOne({ email })
        if(isUserRegistered) {
            return res.status(400).json({ message : "USER ALREADY EXISTS" })
        }
        const newUser = await new authModel({
                                                firstName,
                                                lastName,
                                                email,
                                                password : hashedPassword
                                            });

        const saveUser = await newUser.save();
        saveUser.password = undefined; //prevent sending the password back as part of the payload
        res.status(200).json({ success : true, message: "Registration successful"})
    } catch (error) {
        res.status(500).json({ msg : error.message })
    }
}

// LOGIN USER
const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authModel.findOne({ email })
        if(!user) {
            return res.status(400).json({ message : "USER ISNT REGISTERED" })
        }
        const validatePassword = await bcrypt.compareSync(password, user.password);
        if(!validatePassword) {
            return res.status(400).json({ message : "Invalid Credentials"});
        }
        const generateToken = JWT.sign(
            { id : user._id, email : user.email },
            process.env.SECRET_KEY,
            { expiresIn : '1h'}
        );
        return res.status(200).json({ success : true, msg: "Login success", token: generateToken })

    } catch (error) {
        res.status(500).json({ msg : error.message })
    }
}

module.exports = { registerUser, loginUser }
