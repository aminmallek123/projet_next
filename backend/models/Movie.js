const mongoose =require("mongoose")
const Movie=mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [400, 'Description cannot be more than 200 characters']
    },
    date_creation: {
        type: String,
        required: true,
        maxlength: [400, 'Description cannot be more than 200 characters']
    },
    categorie: {
        type: String, required: true
    },
    Image:{
         type: String, required: true 
    },
    video:{
        type: String, required: true
    }
})
module.exports=mongoose.models.Movie || mongoose.model('Movie', Movie);