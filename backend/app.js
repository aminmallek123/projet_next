const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')
const cors = require('cors')
const note =require("./routes/Note.route")
const auth =require("./routes/user.route")
const movie =require("./routes/Movie.route")
dotenv.config()
const app = express();
//Les cors
app.use(cors())
//BodyParser Middleware
app.use(express.json());
app.use('/api/note', note);
app.use('/api/users', auth);
app.use('/api/movie', movie);
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {console.log("Connexion à la base de données réussie");
    }).catch(err => {
    console.log('Impossible de se connecter à la base de données', err);
    process.exit();
    });
    app.get("/",(req,res)=>{
    res.send("bonjour");
    });
    app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`); });
    module.exports = app;