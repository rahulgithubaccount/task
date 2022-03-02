
const mongoose = require("mongoose")

const students = new mongoose.Schema({
    name:"String",
   rollno:"Number",
   branch:"String",
   year:"Number",
   dob:"Number",
   cgpa:"Number"
})

const Studentdata = new mongoose.model("studentdata",students)

module.exports = Studentdata