const express = require("express");
const cors=require("cors");
const mysql=require("mysql");
const app=express();
app.use(cors());
app.use(express.json());

// const db=mysql.createConnection({
//     host : "localhost",
//     user: "root",
//     password: "",
//     database:"mysql"

// })

const db=mysql.createConnection({
    host : "cc-project.ccrzlfiun0jm.us-east-1.rds.amazonaws.com:3306",
    user: "admin",
    password: "password",
    database:"mysql"

})

app.post('/api/v1/create',(req,res)=> {

    const cmd="Create table if not exists student (id int primary key, name varchar(255), email varchar(255));"

    db.query(cmd,(err,data) => {
        if(err) console.log(err);

        console.log(data)
    })

    const sql="INSERT INTO student (Name,Email) VALUES (?);";
    const values=[
        req.body.name,
        req.body.email
    ]
    db.query(sql,[values],(err,data) => {
        if(err) return res.json(err);
            
        return res.json(data);

    })
})

app.put('/api/v1/update/:id',(req,res)=> {
    const cmd="Create table if not exists student (id int primary key, name varchar(255), email varchar(255));"

    db.query(cmd,(err,data) => {
        if(err) console.log(err);

        console.log(data)
    })

    const sql="update student set Name=?,Email=? where Id=?;";
    const values=[
        req.body.name,
        req.body.email
    ]
    const id=parseInt(req.params.id);
    db.query(sql,[...values,id],(err,data) => {
        if(err) return res.json(err);
            
        return res.json(data);

    })
})

app.delete('/api/v1/student/:id',(req,res)=> {

    const cmd="Create table if not exists student (id int primary key, name varchar(255), email varchar(255));"

    db.query(cmd,(err,data) => {
        if(err) console.log(err);

        console.log(data)
    })


    const sql="Delete from student where Id=?;";
    const id=parseInt(req.params.id);
    db.query(sql,[id],(err,data) => {
        if(err) return res.json(err);
            
        return res.json(data);

    })
})

app.get("/api/v1",(req,res) => {
    const cmd="Create table if not exists student (id int primary key, name varchar(255), email varchar(255));"

    db.query(cmd,(err,data) => {
        if(err) console.log(err);

        console.log(data)
    })

    const sql="SELECT * FROM student";
    db.query(sql,(err,data) => {
        if(err) return res.json("Nope");
        return res.json(data);
    });
});

app.listen(8081,() => {
    console.log("listening");
})
