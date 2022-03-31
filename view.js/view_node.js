const express=require("express")
const { get_data, post, postdata ,put,putdata,delete_data} = require("../controller.js/logical")
const app=express()

const router=express.Router()

router.get('/getdata',get_data)


router.post('/post_data',postdata)

router.put('/put_data/:id',putdata)

router.delete('/delete/:id',delete_data)


module.exports={router}