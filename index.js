const express=require('express')
const app=express()
const path=require('path')
const port=3000


app.use(express.static(path.join(__dirname,'public')))



app.listen(port,()=>{
    console.log('HOLA BRENDA JOCELYNE LA APP SE ESTA EJECUNTANDO EN EL PUERTO 3000')
}
)