
const ControlUser = require('../controllers/User.controller');

module.exports = (app)=>{
    app.post("/api/login",ControlUser.login);
    app.get("/api/user",ControlUser.cerrar);
    app.post("/api/user",ControlUser.createUser);
    app.get("/api/users",ControlUser.getUsers);
}

