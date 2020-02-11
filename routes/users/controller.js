// Controller Users
let model = require('../../models');
const {hashPassword} = require('../../helper');

module.exports = {
    getAll: async (req,res) =>{
        try {
            const result = await model.Users.find({});
            res.status(200).send(result);
        } catch (error) {
            console.log(error)
        }
    },
    postData: async (req,res) => {
        try {
            const dt = req.body;
            const file = req.file;
            const hash = await hashPassword(dt.password);

            const result = await model.Users.create({
                ...dt,
                avatar:file === undefined ? null : file.path,
                password:hash    
            });
            res.status(200).send({
                message:"New Users has been success",
                data : result

            })
        } catch (error) {
            console.log(error)
        }
    },
    getByEmail:async (req,res)=>{
        try {
            const email = req.params.email;
            await model.Users.find({email:email}, (err,docs) => {
                if(err){
                    console.log(err)
                }
                res.status(200).send({
                    message:"Get By Email",
                    data : docs
    
                })
            });
            
        } catch (error) {
            console.log(error)
        }

    },
    updateByEmail: async (req,res)=>{
    
        try {
            const data = req.body;
            const email = req.params.email;
            await model.Users.findOneAndUpdate({email:email},data,{new:true}, (err,dtuser) => {
                res.status(200).send({
                    message:"Users has been updated",
                    data : dtuser
    
                })
            });
            
        } catch (error) {
            console.log(error)
        }


    },
    deleteByEmail: async(req,res)=>{

        try {
            await model.Users.deleteOne({email:req.params.email},(err,result) => {
                if(err){
                    console.log(err)
                }
                res.status(200).send({message:`Your ${req.params.email} has been deleted.`,data:result})
            })

        } catch (error) {
            console.log(error)
        }

    },
    // postData:(req,res) => {

    //     try {
    //         const newData = req.body;
    //         const newFile = req.file;

    //         data.push({...newData,avatar:newFile.path});
    //         console.log(req.file);
    //         res.send({message:'sip',data:data});
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }
}
