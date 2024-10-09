const express=require('express');
const router=express.Router();
const courseData=require('../courseData');
router.use(express.json());
router.use(express.urlencoded({extended:true}));

//get operation
router.get('/',async (req,res)=>{
    try {
        const data=await courseData.find();
    res.status(200).send(data);

    } catch (error) {
        res.status(404).send('Data not found');
    }
   
})

//post operation
router.post('/add',async(req,res)=>{
    try {
        var item=req.body;     //mandatory inorder to take the item from the body
        const data1=new courseData(item);
        const saveddata=await data1.save();
        res.status(200).send('Post successful');
    } catch (error) {
        res.status(404).send('Post unsuccessful');
    }
})


//update operation
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await courseData.findByIdAndUpdate(id,req.body)
        res.status(200).send('Update successful')
    } catch (error) {
        res.status(404).send('Update unsuccessful')
    }
})

//delete operation
router.delete('/remove/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await courseData.findByIdAndDelete(id,req.body);
        res.status(200).send('Delete successful')
    } catch (error) {
        res.status(404).send('Delete unsuccessful')
    }
})

module.exports=router;