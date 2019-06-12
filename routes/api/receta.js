const express = require('express');
var router = express.Router();

var thingsCollection = [];

var thingsStructure = {
    "id": "uuid",
    "receta": "",
    "precio":0 ,
    "tipo": "",
    "observacion": "",
    "estado": ""
};

thingsCollection.push(
    Object.assign({},
        thingsStructure,{
            "id": "uuid",
            "receta": "sopa",
            "precio":100,
            "tipo": "res",
            "observacion": "abc",
            "estado": "ab"
        })
);

router.get('/', (req, res, next)=>{
    res.status(200).json(thingsCollection);
});
router.post('/', (req, res, next)=>{
    var newElement = Object.assign(thingsStructure, req.body, {"id": new Date().getTime()});
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
});



module.exports = router;