const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'template')))
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'template','index.html'))
})
app.get('/about',(req,res)=>{
  res.sendFile(path.join(__dirname,'template','about.html'))
})
app.get('/contact-me',(req,res)=>{
  res.sendFile(path.join(__dirname,'template','contact-me.html'))
})

app.all('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'template','404.html'))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}.`)
})