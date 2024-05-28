const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://mrunknown6970:aryan12345678@cluster0.hsjf83z.mongodb.net/?retryWrites=true&w=majority&appName=ExpenseApp', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`${error}`.bgRed);
    }
}

module.exports = connectDb;
