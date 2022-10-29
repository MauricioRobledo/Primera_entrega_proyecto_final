const express = require('express')
const productRouter = require('./routes/products.js')
const carritoRouter = require("./routes/carrito.js")

const app = express ()

const PORT = process.env.PORT || 8080



const server = app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto 8080")
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/productos", productRouter)
app.use("/api/carrito", carritoRouter)

app.get("/*", (req, res)=>{
    res.send({
        error: -2,
        descripcion: `ruta ${req.path} metodo ${req.method} no implementada`
    })
});