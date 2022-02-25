const mongoose = require("mongoose");
const UserData = mongoose.model("userData");

const journeyDataRoutes = (app) => { 
        
    app.get(`/api/user-data`, async (req, res) => {
        const userData = await UserData.find();

        return res.status(200).send(userData);
    });

    app.get(`/api/user-data/:id`, async (req, res) => {
        const id  = req.params;
        const userData = await UserData.findOne(id);

        return res.status(200).send(userData);
    });

    app.post(`/api/user-data`, async (req, res) => {
       const userData = await UserData.create(req.body);
       
       return res.status(201).send({
          error: false           
        }, userData);
    });


    // NOT RIGHT. I WANT THIS TO ADD TO THE ENTRANTS OF EACH USER
    // app.post(`/api/user-data/:id/entries/`, async (req, res) => {
    //     const id = req.params;
        
    //     const user = await UserData.findOneAndUpdate(id)
    //     const userData = await UserData.create(req.body);
        
    //     return res.status(201).send({
    //        error: false           
    //      }, userData);
    //  });

    app.put(`/api/user-data/:id`, async (req, res) => {
        const id  = req.params;

        const userData = await UserData.findOneAndUpdate(id, req.body);

        return res.status(202).send(userData);
    });

    app.delete(`/api/user-data/:id`, async (req, res) => {
        const id =req.params;

        const userData = await UserData.findOneAndDelete(id);

        return res.status(202).send({
           error: false   
        }, userData);
    });
};

module.exports = journeyDataRoutes;