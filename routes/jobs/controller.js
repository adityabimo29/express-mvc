const {Jobs} = require('../../models');

module.exports = {
    addPost: async (req,res) =>{
        try {
            const dt = req.body;
            const result = await Jobs.create({dt});
            res.status(200).send({
                message:"Jobs has been successfully added.",
                data : result

            })
        } catch (error) {
            console.log(error)
        }
    },
    getAll:async(req,res)=>{
        try {
            const result = await Jobs.find({}).populate('user','username email');
            res.status(200).send(result);
        } catch (error) {
            console.log(error)
        }
    },
    getOne:async (req,res) => {
        try {
            const idku = req.params.id;
            await Jobs.find({_id:idku}, (err,docs) => {
                if(err){
                    console.log(err)
                }
                res.status(200).send({
                    message:"Get By Id Job",
                    data : docs
    
                })
            });
            
        } catch (error) {
            console.log(error)
        }
    },
    deleteOne:async (req,res) => {
        try {
            await Jobs.deleteOne({_id:req.params.id},(err,result) => {
                if(err){
                    console.log(err)
                }
                res.status(200).send({message:`Your ${req.params.id} has been deleted.`,data:result})
            })

        } catch (error) {
            console.log(error)
        }
    },
    updateOne:async (req,res) => {
        try {
            const data = req.body;
            const idku = req.params.id;
            await Jobs.findOneAndUpdate({_id:idku},data,{new:true}, (err,dt) => {
                res.status(200).send({
                    message:"data has been updated",
                    data : dt
    
                })
            });
            
        } catch (error) {
            console.log(error)
        }
    },
    getByUserId:async (req,res) => {
        try {
            const result = await Jobs.find({user:req.params.id}).populate('user','username email');
            res.status(200).send({message:'list data',data:result});
        } catch (error) {
            console.log(error)
        }
    },

}