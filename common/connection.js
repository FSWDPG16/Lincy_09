const mongoose = require("mongoose") 


const connection = () =>{
mongoose.connect(
        process.env.uri
)
    .then(() =>{
        
        console.log('connected to mongodb');
    })
    .catch((error) => {
        console.log ('error connecting to mongodb:' ,error)
    });
}
module.exports = connection;
