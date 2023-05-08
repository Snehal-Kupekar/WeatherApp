const express = require('express');
const app = express();
const hbs = require('hbs')
//to run on your ip address
const port = process.env.PORT || 8000;
const path = require("path")



//public static path  
  const stacticPath = path.join(__dirname , "../public");
  const template_path = path.join(__dirname , "../templates/views");
  const partial_path = path.join(__dirname , "../templates/partial")

//  console.log(stacticPath)
app.use(express.static(stacticPath))


// dynamic engine 

app.set('view engine' , 'hbs');
app.set('views' , template_path);
hbs.registerPartials(partial_path);

//routing
app.get("/" , (req,res)=>{
    res.render("index");
})

app.get("/about" , (req,res)=>{
    res.render("about");
})

app.get("/weather" , (req,res)=>{
    res.render("weather");
})

app.get("*" , (req,res)=>{
    res.render('404error',{
        errorname : "OOppp!Page Not Found"
    });
})

app.listen(port,()=>{
    console.log("Listening to the port 8000")
})
