const express =require("express");
const { error } = require("node:console");
const app=express();
const PORT=3000;

function provjeri(req)
{
    const broj1=Number(req.query.a);
    const broj2=Number(req.query.b);

    if(Number.isNaN(broj1) || Number.isNaN(broj2))
    {
        return{error:"Parameti nisu brojevi"}

    }
    else{
        return{broj1,broj2};

    }

}
app.get('/zbroji',(req,res)=>
{
    const validacija=provjeri(req);
    if (validacija.error)
    {
        res.json({greska:"Dogodila se greška"});
       
    }   

    else
        {
        let rezultat=validacija.broj1+validacija.broj2;
        res.json({zbroj:rezultat})

    }
});

app.get('/oduzmi',(req,res)=>
{
    const validacija=provjeri(req);
    if (validacija.error)
    {
        res.json({greska:"Dogodila se greška"});
       
    }   

    else
        {
        let rezultat=validacija.broj1-validacija.broj2;
        res.json({razlika:rezultat})

    }
});
app.get('/pomnozi',(req,res)=>
{
    const validacija=provjeri(req);
    if (validacija.error)
    {
        res.json({greska:"Dogodila se greška"});
       
    }   

    else
        {
        let rezultat=validacija.broj1*validacija.broj2;
        res.json({umnozak:rezultat})

    }
});
app.get('/podjeli',(req,res)=>
{
    const validacija=provjeri(req);
    if (validacija.error)
    {
        res.json({greska:"Dogodila se greška"});
       
    }   

    else
        {
        let rezultat=validacija.broj1/validacija.broj2;
        res.json({kolicnik:rezultat})

    }
});