 const express = require("express");
 const bodyparser=require('body-parser');
 
 const {PORT} =require('./config/serverconfig');
 const ApiRoutes=require('./routes/index');

 const setupandstartserver=async () =>{

    //create the express object
    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);


    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`); 
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }
    });
  
 }

 setupandstartserver(); 