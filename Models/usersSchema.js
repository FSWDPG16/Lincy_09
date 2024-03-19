const mongoose = require  ("mongoose")
const user =new mongoose.Schema( {
    userName : {
        type : String
    },
    Age : {
        type :String
    },
    DOB : {
        type : String
    },
    Fav_actor : {
        type :String
    } 
})
const fire =mongoose.model ('lincy' ,user);
module.exports = fire;