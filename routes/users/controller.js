// Controller Users
let data = require('../../models/users');

module.exports = {
    getAll:(req,res) =>{
        res.status(200).send(data);
    },
    getByEmail:(req,res)=>{
        const email = req.params.email;
        const item = data.find(_item => _item.email === email);
        if (item) {
            res.json(item);
        } else {
            res.json({ message: `email ${email} doesn't exist`})
        }
        //res.send({message:'this is get by id'})
    },
    updateByEmail:(req,res)=>{
        const newData = [];

        data.forEach(item => {
            if(item.email === req.params.email){
                newData.push(req.body)
            }else{
                newData.push(item)
            }
        })
        
        
        data = newData ;
        console.log(data);
        res.send({message:'Users has been updated.',data:data});

    },
    deleteByEmail:(req,res)=>{
        const newData = data.filter(item => item.email !== req.params.email );
        data = newData;
        //res.json(data);
        res.send({message:'User has been deleted.',data:data});
    },
    postData:(req,res) => {

        try {
            const newData = req.body;
            const newFile = req.file;

            data.push({...newData,avatar:newFile.path});
            console.log(req.file);
            res.send({message:'sip',data:data});
        } catch (error) {
            console.log(error)
        }
        
    }
}
