const express = require("express");
const app  = express();
const fs = require('fs');
const path = require("path");
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));//set the view directory


// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the content that will we use in pug"
    const vipul = {'title': 'PAwan vishwakarma', "content": con}
    res.status(200).render('index.pug', vipul);
})
app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const vipul = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', vipul);

})


// endpoint
app.get("/demo", (req,res)=>{
    res.status(200).render('demo',{title:'hey pawan vishwakarma',message:'hello there and how are you'});
});
app.get("/h", (req,res)=>{
    res.send("this is my homepage of my first express app");
});
app.get("/about", (req,res)=>{
    res.send("this is my about of my first express app");
});
app.get("/Transaction", (req,res)=>{
    res.send("this is my services of my first express app");
});
app.get("/contact", (req,res)=>{
    res.send("this is my contact of my first express app");
});
app.get("/hire",(req,res)=>{
    res.send("this is get req");
});
app.listen(port, ()=>{
    console.log(`the application statred succesfully on port ${port}`);
});
