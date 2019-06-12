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

router.put('/:idElemento', (req, res, next)=>{
    var id = parseInt(req.params.idElemento);
    var update = req.body;
    var modifiedObject = {};
    var originalObject = {};
    thingsCollection = thingsCollection.map((e, i)=>{
        if (e.id === id){
            originalObject = Object.assign({}, e);
            return Object.assign(modifiedObject, e, req.body);
        }
        return e;
    });//map
    res.status(200).json({"o": originalObject, "m": modifiedObject});
})

module.exports = router;