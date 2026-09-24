import express from 'express';
const app=express(); const port=process.env.PORT||3000;
app.use(express.static('public')); app.get('/health',(req,res)=>res.json({ok:true}));
app.listen(port,'0.0.0.0',()=>console.log(`Empire Idle listening on ${port}`));