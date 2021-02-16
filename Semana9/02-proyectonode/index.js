//importo axios, como esta en los node_modules lo imporot directamente
const axios = require("axios")

//utilizo el metdo .get que tiene acios para hacer una peticion 
//similar a un fetch
axios.get("https://reqres.in/api/users?page=2")
.then(respuesta =>{
    console.log(respuesta)
})

.catch(error => console.log(error))