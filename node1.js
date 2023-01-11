const mysql=require('mysql')

var db = mysql.createConnection({
    host:'localhost',
    user:'bidura1',
    password:'passcode'
})
db.connect(function(err){
    if(err)throw err
    console.log("connected to mysql server")
})
var sql="CREATE DATABASE INFOSYS";
db.query(sql,function(err,result){
    //if(err)throw err
    console.log("DB created")
})

db = mysql.createConnection({
    host:'localhost',
    user:'bidura1',
    password:'passcode',
    database:'INFOSYS'
})
db.connect(function(err){
    if(err)throw err
    console.log("connected database")
})
 sql="CREATE TABLE SPRING(eid INT NOT NULL PRIMARY KEY,name VARCHAR(30),desig VARCHAR(35),dept VARCHAR(30),salary FLOAT(10,2),location VARCHAR(100))";
db.query(sql,function(err,result){
    //if(err)throw err
    console.log("Table created")
})
 sql="INSERT INTO SPRING VALUES(1993,'richie','manager','HR',500000.0,'coimbatore')";
db.query(sql,function(err,result){
    //if(err)throw err
    console.log("Value inserted")
})
 sql="DELETE FROM SPRING WHERE eid=135"
db.query(sql,function(err,result){
    if(err)throw err
    console.log(JSON.stringify(result))
})

var express=require('express')
const path=require('path')
const app= express()
const cors=require('cors')
const bodyParser= require('body-parser')
const port=3022
app.listen(port,()=>console.log(`Server waiting at port ${port}`))
app.use(bodyParser.urlencoded({'extended':false}))
app.use(express.static(path.join(__dirname)))
app.use(cors({
    origin:'*'
}))
app.get('/',function(err,res){
    res.sendFile(path.join(__dirname,'/home.html'))
})
app.get('/add',function(err,res){
    res.sendFile(path.join(__dirname,'/add.html'))
}) 
app.get('/update',function(err,res){
    res.sendFile(path.join(__dirname,'/update.html'))
})
app.get('/search',function(err,res){
    res.sendFile(path.join(__dirname,'/search.html'))
})
app.post('/add2',function(req,res){
    res.send("<h5>inserting employee</h5>")
     sql="INSERT INTO SPRING VALUES(?,?,?,?,?,?)";
    db.query(sql,[req.body.eid,req.body.name,req.body.desig,req.body.dept,req.body.salary,req.body.location],function(err,result){
     if(err)throw err
    console.log("Value inserted") 
    
})
})


app.post('/update2',function(req,res){
    res.send("<h5>updating employee</h5>")
    var resp=req.body
     sql="UPDATE SPRING "+ "SET location = '"+resp['location2']+ "' WHERE location = '"+ resp['location1']+"'";
    db.query(sql,function(err,result){
    if(err)throw err
    console.log("Location updated") 
    sql="SELECT * FROM SPRING";
const fs=require('fs')
db.query(sql,function(err,result){
if(err)throw err
fs.writeFile('./emp.json',JSON.stringify(result),function(err){
    if(err)throw err
})
})
})
}) 
app.post('/search2',function(req,res){
    res.send("<h5>Search employee</h5>")
    var resp=req.body
     sql="SELECT * FROM SPRING WHERE dept= '"+resp['dept']+"'";
    db.query(sql,function(err,result){
    if(err)throw err
    console.log(result)
})
})

sql="SELECT * FROM SPRING";
const fs=require('fs')
db.query(sql,function(err,result){
if(err)throw err
fs.writeFile('./emp.json',JSON.stringify(result),function(err){
    if(err)throw err
    console.log(result)
})
})
const load= ()=>JSON.parse(fs.readFileSync('emp.json'))
app.get('/emp',function(err,res){
    res.send(load())
})
const mysql=require('mysql')

var db = mysql.createConnection({
    host:'localhost',
    user:'bidura1',
    password:'passcode'
})
db.connect(function(err){
    if(err)throw err
    console.log("connected to mysql server")
})
var sql="CREATE DATABASE INFOSYS";
db.query(sql,function(err,result){
    //if(err)throw err
    console.log("DB created")
})

db = mysql.createConnection({
    host:'localhost',
    user:'bidura1',
    password:'passcode',
    database:'INFOSYS'
})
db.connect(function(err){
    if(err)throw err
    console.log("connected database")
})
 sql="CREATE TABLE SPRING(eid INT NOT NULL PRIMARY KEY,name VARCHAR(30),desig VARCHAR(35),dept VARCHAR(30),salary FLOAT(10,2),location VARCHAR(100))";
db.query(sql,function(err,result){
    //if(err)throw err
    console.log("Table created")
})
 sql="INSERT INTO SPRING VALUES(1993,'richie','manager','HR',500000.0,'coimbatore')";
db.query(sql,function(err,result){
    //if(err)throw err
    console.log("Value inserted")
})
 sql="DELETE FROM SPRING WHERE eid=135"
db.query(sql,function(err,result){
    if(err)throw err
    console.log(JSON.stringify(result))
})

var express=require('express')
const path=require('path')
const app= express()
const cors=require('cors')
const bodyParser= require('body-parser')
const port=3022
app.listen(port,()=>console.log(`Server waiting at port ${port}`))
app.use(bodyParser.urlencoded({'extended':false}))
app.use(express.static(path.join(__dirname)))
app.use(cors({
    origin:'*'
}))
app.get('/',function(err,res){
    res.sendFile(path.join(__dirname,'/home.html'))
})
app.get('/add',function(err,res){
    res.sendFile(path.join(__dirname,'/add.html'))
}) 
app.get('/update',function(err,res){
    res.sendFile(path.join(__dirname,'/update.html'))
})
app.get('/search',function(err,res){
    res.sendFile(path.join(__dirname,'/search.html'))
})
app.post('/add2',function(req,res){
    res.send("<h5>inserting employee</h5>")
     sql="INSERT INTO SPRING VALUES(?,?,?,?,?,?)";
    db.query(sql,[req.body.eid,req.body.name,req.body.desig,req.body.dept,req.body.salary,req.body.location],function(err,result){
     if(err)throw err
    console.log("Value inserted") 
    
})
})


app.post('/update2',function(req,res){
    res.send("<h5>updating employee</h5>")
    var resp=req.body
     sql="UPDATE SPRING "+ "SET location = '"+resp['location2']+ "' WHERE location = '"+ resp['location1']+"'";
    db.query(sql,function(err,result){
    if(err)throw err
    console.log("Location updated") 
    sql="SELECT * FROM SPRING";
const fs=require('fs')
db.query(sql,function(err,result){
if(err)throw err
fs.writeFile('./emp.json',JSON.stringify(result),function(err){
    if(err)throw err
})
})
})
}) 
app.post('/search2',function(req,res){
    res.send("<h5>Search employee</h5>")
    var resp=req.body
     sql="SELECT * FROM SPRING WHERE dept= '"+resp['dept']+"'";
    db.query(sql,function(err,result){
    if(err)throw err
    console.log(result)
})
})

sql="SELECT * FROM SPRING";
const fs=require('fs')
db.query(sql,function(err,result){
if(err)throw err
fs.writeFile('./emp.json',JSON.stringify(result),function(err){
    if(err)throw err
    console.log(result)
})
})
const load= ()=>JSON.parse(fs.readFileSync('emp.json'))
app.get('/emp',function(err,res){
    res.send(load())
})
