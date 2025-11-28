const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hola mlundo");
})

app.get('/saludo', (req, res) => {
    res.json({
        msj : "hola",
        autr : "Carlo",
        fecha: new Date()
    });
})

const usrs = [
    {id: 1, nomb:"Getrudiz", edad: 20},
    {id: 2, nomb:"Jamal", edad: 23},
    {id: 3, nomb:"Sahur", edad: 67}
];



app.post('/user', (req, res) => {
    const cuerpo = req.body;

    const usuario = {
        id: usrs.length + 1, 
        nomb: cuerpo.nombre,
        edad: cuerpo.edad
    }
    
    usrs.push(usuario);

    res.json({
        msj : "Usuario agregado",
        new_usr : usuario,
        usrs_act: usrs
    })
})

app.get('/user', (req, res) => {
    res.json({
        usrs : usrs
    })
})

app.put('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cuerpo = req.body;
    
    const usrIndex = usrs.findIndex(u => u.id == id);
    if(usrIndex == -1){
        return res.status(404).json({msj: "Usuario no encontrado"});
    }

    usrs[usrIndex].nomb = cuerpo.nomb || usrs[usrIndex].nomb;
    usrs[usrIndex].edad = cuerpo.edad || usrs[usrIndex].edad;

    res.json({
        msj : "Usuario actualizado",
        usr_act : usrs[usrIndex],
        usrs_act: usrs
    })
})

app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cuerpo = req.body;
    
    const usrIndex = usrs.findIndex(u => u.id == id);
    if(usrIndex == -1){
        return res.status(404).json({msj: "Usuario no encontrado"});
    }

    const usrDel = usrs.splice(usrIndex, 1);

    res.json({
        msj : "Usuario eliminado",
        usr_act : usrDel[0],
        usrs_act: usrs
    })
})

app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost, puerto:" + PORT);
})