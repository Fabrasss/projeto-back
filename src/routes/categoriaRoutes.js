const express = require('express')
const Controller = require('../controllers/categoriaController')
const router = express.Router()

router.get('/search', Controller.list)
router.post('/create',Controller.create)

module.exports = router


// function chuchu(){
//     fetch('http://localhost:10000/v1/user', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             firstname: 'chuchu',
//             surname: 'chuchu',
//             email: 'chuchu',
//             password: 'chuchu'
//         }),
//     }).then((res)=>res.json()).then((data)=>console.log(data))
// }