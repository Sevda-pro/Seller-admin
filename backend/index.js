const express=require("express")
const cors=require("cors")
const path=require("path")
const bodyParser=require('body-parser')
const folder_route=require("./index.route")
const app=express()


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())
// const staticpath=path.join(__dirname,"./public");
// app.use(express.static(staticpath))
const db=require('./db.config')
db.sequelize.sync().then(()=>{
    console.log("ok report")
  }).catch(()=>{
    console.log("error")
  })
app.use("/",folder_route)
app.listen(3000);


