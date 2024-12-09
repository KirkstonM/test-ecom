const app = require("express");
const { registerUser, loginUser } = require("../controllers/authControls");

const router = app.Router();

//http://localhost:3001/login
router.post("/login", loginUser);

//http://localhost:3001/register
router.post("/register", registerUser);


module.exports = router;