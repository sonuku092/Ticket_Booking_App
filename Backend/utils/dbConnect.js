const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
const Connection=()=>{
mongoose.connect(process.env.mongo_URL,{useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('Database Connected!'))
.catch(err => console.log(err));
}
module.exports=Connection;


