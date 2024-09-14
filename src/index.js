 const express = require("express");
 const bodyparser=require('body-parser');
 
 const {PORT} =require('./config/serverconfig');
 const ApiRoutes=require('./routes/index');
 //const CityRepository=require('./repository/city-repository');

 const setupandstartserver=async () =>{

    //create the express object
    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);


    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`); 
        //const repo=new CityRepository();
        //repo.createcity({ name: "New Delhi"})
    });
  
 }

 setupandstartserver(); 