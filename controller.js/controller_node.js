const fs= require('fs')
const y = require("readline-sync");
const axios=require("axios");
axios.get("https://api.merakilearn.org/courses")
.then( a=>{
    merakhi_data=a.data
    File1=JSON.stringify(merakhi_data,null,3)
    k=fs.writeFileSync("mynewfile.json",File1)
    serial_no=0
    for(i of merakhi_data){
        console.log(serial_no+1,i["name"],i["id"])
        serial_no++
    
    }
})
.catch(Error=>{
    console.log(Error)
})
