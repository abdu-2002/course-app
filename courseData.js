const mongoose=require('mongoose');



const courseSchema=mongoose.Schema({
    imgurl:String,
    courseId:String,
    courseName:String,
    courseCategory:String,
    courseDescription:String,
    Duration:String,
    courseFee:Number
})
const courseData=mongoose.model('course',courseSchema);    
module.exports=courseData;     