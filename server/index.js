const express=require('express');
const app=express();
const dotenv=require("dotenv");
const mysql=require("mysql");
const bodyParser=require('body-parser');
const cors=require('cors');






app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config();

const db_host=process.env.HOST;
const db_user=process.env.USER;
const db_pass=process.env.PASSWORD;
const db_database=process.env.DATABASE;

const db=mysql.createPool({
    host:db_host,
    user:db_user,
    password:db_pass,
    database:db_database,
});
// // 404 page

// app.use(function(req, res, next){
//     res.status(404);
//     res.type('txt').send('Not found');
// });






app.get("/",(req,res)=>{
    res.send("hello api..!!");
});


// event all api


app.get("/eventAll",(req,res)=>{
    var name=req.body.name;
    const getAll="select * from cuinfo_events;";
    db.query(getAll,(err,result)=>{
        res.send(result)
    })
})
app.get("/eventDate/accending",(req,res)=>{
    var name=req.body.name;
    const getAll="select * from cuinfo_events ORDER BY event_date ASC;";
    db.query(getAll,(err,result)=>{
        res.send(result)
    })
})
app.get("/eventDate/decending",(req,res)=>{
    var name=req.body.name;
    const getAll="select * from cuinfo_events ORDER BY event_date DESC;";
    db.query(getAll,(err,result)=>{
        res.send(result)
    })
})
app.get("/eventSNo/accending",(req,res)=>{
    var name=req.body.name;
    const getAll="select * from cuinfo_events ORDER BY event_id ASC;";
    db.query(getAll,(err,result)=>{
        res.send(result)
    })
})
app.get("/eventSNo/decending",(req,res)=>{
    var name=req.body.name;
    const getAll="select * from cuinfo_events ORDER BY event_id DESC;";
    db.query(getAll,(err,result)=>{
        res.send(result)
    })
})


// notes like api

app.get("/noteLikeAll",(req,res)=>{
    const getAll="select sub_id,sub_like from cuinfo_notes order by sub_id ASC";
    db.query(getAll,(err,result)=>{
        res.send(result)
    })
})

app.post("/noteLikeNew",(req,res)=>{
    var id=req.body.id;
    var count=req.body.count;
    const getAll="UPDATE cuinfo_notes SET sub_like=? WHERE sub_id=?;";
    db.query(getAll,[count,id],(err,result)=>{
        res.send(result)
    })
})


// admin apis

app.get("/adminInfo",(req,res)=>{
    var name=req.query.name;
    var email=req.query.email;
    var pass=req.query.pass;
    const getAll="select * from cuinfo_admin where admin_name=? and admin_email=? and admin_pass=?;";
    db.query(getAll,[name,email,pass],(err,result)=>{
        res.send(result);
    })
})
app.post("/addEventCard",(req,res)=>{
    var date=req.body.date;
    var subject=req.body.subject;
    var text=req.body.text;
    const postAll="insert into cuinfo_events (event_topic,event_date,event_text) values(?,?,?);"
    db.query(postAll,[subject,date,text],(err,result)=>{
        res.send(result);
    })
})
app.post("/deleteEventCard",(req,res)=>{
    var sno=req.body.sno;
    const postAll="delete from cuinfo_events where event_id=?;"
    db.query(postAll,[sno],(err,result)=>{
        res.send(result);
    })
})



const port=process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`listning on port ${port}`);
});


// npm run devStart