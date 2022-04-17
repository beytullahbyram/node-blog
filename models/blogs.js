const mongoose = require('mongoose');
const Schema=mongoose.Schema
//ŞEMA OLUSTURDUK İÇİNDE NESNE/(JSON) OLUSTURUYORUZ ÇÜNKÜ YAPILAR O SEKİLDE 
const blogSchema=new Schema({
    //key tanımlama
    title:{
        //title nesnsinin özellikleri
        type:String,
        require:true// true ile zorunlu bir özellik oldugğunu belirttik 
    },
    short:{
        type:String,
        require:true
    },
    long:{
        type:String,
        require:true
    }
},{timestamps:true})//veri kaydedildiğinde otomatik olarak ne zaman kaydedildiğini mongo dbye yazar

            //şemaya ulaşırken kullanacağımız isim Blog
const Blog=mongoose.model('Blog',blogSchema)
module.exports=Blog
