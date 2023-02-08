const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = () => {

        const dbCON = mongoose.connect(process.env.DB_URL, {useNewUrlParser:true , useUnifiedTopology:true});
        mongoose.connection.once('open',()=>console.log('DATABASE CONNECTED'));
        mongoose.connection.on('error',()=>console.log('NO DATABASE CONNECTION...'));

}

module.exports = connectDB;