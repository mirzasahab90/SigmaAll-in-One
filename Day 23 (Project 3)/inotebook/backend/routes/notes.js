const express =require('express');
const router = express.Router();

router.get('/', (req,res)=>
{
    obj = {
        a:'Rayan',
        number : 20
    }
    res.json(obj)
})
module.exports = router