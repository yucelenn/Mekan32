//var dbURI = 'mongodb+srv://mekan32:mekan32@mekan32.oz16t.mongodb.net/mekan32?retryWrites=true&w=majority';
//var dbURI = 'mongodb://localhost:27017/mekanlar';
var mongoose = require('mongoose' );
//var dbURI = 'mongodb://localhost:27017/mekan32';
var dbURI = 'mongodb+srv://mekan32:mekan32@mekan32.oz16t.mongodb.net/mekan32?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', function() {
    console.log('Mongoose ' + dbURI+
    ' adresindeki veritabanina baglandi\n');
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose baglanti hatasi\n: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose baglanti kesildi\n:');
});
kapat = function(msg, callback){
    mongoose.connection.close(function() {
        console.log('Mongoose kapatildi\n ' + msg);
        callback();
    });
};

process.once('SIGUSR2',function() {
    kapat('nodemon kapatildi\n', function() {
        process.kill(process.pid,'SIGUSR2');
    });
});

process.on('SIGINT',function(){
    kapat('uygulama kapatildi\n', function() {
        process.exit(0);
    });
});

process.on('SIGTERM',function(){
    kapat('heroku kapatildi\n', function() {
        process.exit(0);
    });
});

require('./mekansema');