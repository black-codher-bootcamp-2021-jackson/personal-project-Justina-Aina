const mongoose = require("mongoose");
const UserData = mongoose.model("userData");
const EntrantData = mongoose.model("entrantData");

const journeyDataRoutes = (app) => { 
        
    app.get(`/api/user-data`, async (req, res) => {
        const userData = await UserData.find();

        return res.status(200).send(userData);
    });
};

module.exports = journeyDataRoutes;