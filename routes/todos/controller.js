// Controller Todos
let data = require('../../models/todos');

module.exports = {
    getAll:(req,res) =>{
        res.status(200).send({message:'List All Todos',data:data});
    },
    getById:(req,res)=>{
        const id = req.params.id;
        const item = data.find(_item => _item.id === parseInt(id) );
        if (item) {
            res.send({data:item});
        } else {
            res.send({ message: `id ${id} doesn't exist`})
        }
    },
    updateById:(req,res)=>{
        const newData = [];

        data.forEach(item => {
            if(item.id === parseInt(req.params.id) ){
                newData.push(req.body)
            }else{
                newData.push(item)
            }
        })

        data = newData ;
        console.log(data);
        res.send({message:'Todos has been updated.',data:data});
    },
    deleteById:(req,res) => {
        const newData = data.filter(item => item.id !== parseInt(req.params.id) );
        data = newData;
        //res.json(data);
        res.send({message:'List has been deleted.',data:data});
    }

}
