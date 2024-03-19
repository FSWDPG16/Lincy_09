const fire = require("../Models/usersSchema");

const postPost = () => {
    async (req,res) => {
    try {
        const {userName,Age,DOB,Fav_actor} =req.body;
        const moon = new fire({userName});
        await moon.save()
        res.json({
            message :` MyName : ${userName},age : ${Age},DOB :${DOB},Fav-Actor : ${Fav_actor}`  
        })
    }
    catch (error) {
        res.json ({
            message :`error ${error}`
        })
    }
    }}


const getGet = () => {

    async(req,res) => {
        try {
        const lincy = await fire.find();
          // console.log("friends:" ,linz)
        res.json (lincy);
        } catch (error) {
          // console.error("fetching error :",error)
        res. status(500). json ({
            message:`server error:  ${error}`,
        });
        }
    }};

const putPut= () => {

    async(req,res)=>{
        try{
            const {userName,DOB}=req.body;
            const objectId = req.params.id
            const updateData = await fire.findByIdAndUpdate(
                objectId,
                {userName,DOB},
                {new:true}
            );
            res.json({
                data:updateData,
            });
        }catch(error){
            res.status(500).json({
                message:error.message,
            });
        }
    }};

const delDel= ()=> {

    async (req, res) => {
        try{
        const deleteDataObjectId =req.params.id;
        const deleteData = await fire.findByIdAndDelete(deleteDataObjectId);
    
        res.json({
            data: deleteData,
            message : "Data Deleted Successfully",
    });
        }catch(error) {
        res.status(500).json({
            message: error.message,
        });
        }
    }};


    const userProfile = async (req,res) =>{
        try{
            const userPic = req.file
            res.json({
                profile:userPic
            })
        }
        catch(error){
            res.json({
                message : error.message,
            })
        }
    }
    module.exports={
        postPost,
        getGet,
        putPut,
        delDel,
        userProfile
    }
    