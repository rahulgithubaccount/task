const express = require("express");
require("./Db/connect");
const Studentdata = require("./Db/models/Students");
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

app.post("/poststudents", (req, res) => {
  try {
    const { name, rollno,branch,dob,year,cgpa } = req.body;
    const users = new Studentdata({
      name,
      rollno,
      branch,
      year,
      dob,
      cgpa,
    });

    res.send({   users }); 
    console.log(req.body);
    users.save();
  } catch (err) {
    console.log(err);
  }
});


app.get("/getstudents", async(req,res)=>{
    const getData = await Studentdata.find();
    res.send(getData)
  
})


app.delete("/deletepost/:id",(req,res)=>{
    console.log(req.params.id)
    const deleledata =  Studentdata.findByIdAndDelete(req.params.id)
   .then((deleledata)=>{
       if(!deleledata){
         return res.send("invalid id")
       }
       res.send(deleledata)

   }).catch((err)=>{
       console.log(err)
   })

});


app.patch("/update/:id",(req,res)=>{
    console.log(req.params.id)
    const update = Studentdata.findByIdAndUpdate(req.params.id,req.body,({new:true}))
    .then((update)=>{
        if(!update){
          return res.send("invalid id")
        }
        res.send(update)
 
    }).catch((err)=>{
        console.log(err)
    })
})

app.listen(port, () => {
  console.log("success");
});
