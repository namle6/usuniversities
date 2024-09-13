const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const pool = require('./db')




//middleware 
app.use(cors())
app.use(express.json())


//Routes 

//create a school 

app.post("/schools", async(req,res) =>{
//await 
try {
  const {name} = req.body 
  const newSchool = await pool.query("INSERT INTO schools (name) VALUES ($1) RETURNING *", 
  [name])

  res.json(newSchool.rows[0])
  
} catch (error) {
  console.error(error.message)
}
})

// get all schools 

app.get("/schools", async(req,res)=>{
  try {
    const allSchools = await pool.query("SELECT * FROM schools")
    res.json(allSchools.rows)
  } catch (error) {
    console.error(error.message)
  }
})

//get a school

app.get("/schools/:id", async(req,res) =>{
  try {
    const {id} = req.params
    const aschool = await pool.query("SELECT * FROM schools WHERE id = $1", [id])
    res.json(aschool.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

//update a school 

app.put("/schools/:id", async(req,res)=>{
  try {
    const {id} = req.params
    const {name} = req.body
    const updateSchool = await pool.query("UPDATE schools SET name = $1 WHERE id = $2", [name, id])
    res.json("School was updated")
  } catch (error) {
    console.error(error.message)
  }
})


//delete a school 

app.delete("/schools/:id", async(req,res)=>{
  try {
    const {id} = req.params
    const deleteSchool = await pool.query("DELETE FROM schools WHERE id = $1", [id])
    res.json("School was delete")
  } catch (error) {
   console.error(error.message) 
  }
})

app.listen(port, () => {
    console.log(` app started on port ${port}`)
  })