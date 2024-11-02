// connecting server with backend
const express = require('express');
const app = express();

app.get("/",(req,res)=>{
          res.send("Hello World");
})

//PORT
const port = process.env.PORT || 5000;

const start = async () =>{
          try {
             app.listen(port,() =>{
                    console.log(`Server is running on port ${port}`);
             })
          } catch (error) {
                    console.log(error)
          }
}


start();