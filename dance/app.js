const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;



app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const vipul = { }
    res.status(200).render('home.pug',vipul);

})
app.get("/contact", (req, res)=>{ 
    const vipul ={ }
    res.status(200).send('contact.pug', vipul);
});

app.listen(port,()=>{
    console.log(`the application started succesfully on port ${port}`);
})