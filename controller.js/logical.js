const req = require('express/lib/request')
const res = require('express/lib/response')
const { redirect, append } = require('express/lib/response')
const mirakhi_data= require('./mynewfile.json')
const fs=require("fs")

const get_data=(req,res)=>{
    res.send(mirakhi_data)
}


const postdata=(req,res)=>{
    console.log(req,res)
    user={
    id:mirakhi_data.length+1,
      name:req.body.name ,
      logo:req.body.logo,
      notes:req.body.notes,
      days_to_complete: req.body.days_to_complete,
      short_description: req.body.short_description,
      type: req.body.type,
      course_type:req.body.course_type,
      lang_available: req.body.lang_available
        
    }
    mirakhi_data.push(user)
    res.json(user)
    a=fs.writeFileSync("mynewfile.json",JSON.stringify(mirakhi_data,null,4))
    // res.send({message:"post succesufully"})
}


const putdata=(req,res)=>{
    let  id=req.body.id
    let name=req.body.name 
    let logo=req.body.logo
    let notes=req.body.notes
    let days_to_complete= req.body.days_to_complete
    let short_description= req.body.short_description
    let type= req.body.type
    let course_type=req.body.course_type
    let lang_available=req.body.lang_available
        
    let index=mirakhi_data.findIndex((data)=>{
        return(data.id==Number.parseInt(id))
    })
    if (index>=0){
        let std=mirakhi_data[index]
        std .id=req.body.id
        std . name=req.body.name 
        std. logo=req.body.logo
        std .notes=req.body.notes
        std . days_to_complete= req.body.days_to_complete
        std .short_description= req.body.short_description
        std .type= req.body.type
        std .course_type=req.body.course_type
        std  .lang_available=req.body.lang_available


        res.json(std)
        a=fs.writeFileSync("mynewfile.json",JSON.stringify(mirakhi_data,null,4))
        
    }else{
        res.status(404)
    }
    
}



const delete_data=(req,res)=>{
    let id=req.params.id;
    let index=mirakhi_data.findIndex((mirakhi_data)=>{
        return(mirakhi_data.id==Number.parseInt(id))
    })
    // return(mirakhi_data.id==Number.parseInt(id))

if (index>=0){
    let std=mirakhi_data[index]
    res.json(std)
    mirakhi_data.splice(index,1)
    a=fs.writeFileSync("mynewfile.json",JSON.stringify(mirakhi_data,null,4))
}else{
    res.status(404)
    res.end
}

}

module.exports={get_data,postdata,putdata,delete_data}



