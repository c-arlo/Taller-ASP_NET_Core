# Descripción del proyecto
Proyecto practico desarrollado durante el webinar "ASP REST con Node.js y Express",
donde se implementa una aplicación web haciendo uso del entorno Javascript para aplicaciones web de Node.js
y el framework para backend Express.js.

# Estructura del proyecto
ProyectoAPI_REST/  
├── node_modules/ - Dependencias de Node.js y Express  
├── index.js  - Archivo principal de la API con gestión CRUD de usuarios  
├── package-lock.json  - Configuración de las dependencias  
├── package.json  - Archivo configuración proyecto  
└── README.md  - Documentación del proyecto  

# Instrucciones de ejecución
### 1. Clonar el repositorio
```bash
git clone https://github.com/c-arlo/Taller-ASP_NET_Core.git
```
### 2. Abre la solución en Visual Studio o Visual Studio Code
### 3. Ejecuta la aplicación
### 3. Accede a la aplicación a través de un navegador web
Ingresa a la dirección `http://localhost:3000` en la barra de busqueda

# Funciones CRUD
Agregar un usuario en `http://localhost:3000/user`
```
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
```

Obtener todos los usuarios en `http://localhost:3000/user`
```
app.get('/user', (req, res) => {
    res.json({
        usrs : usrs
    })
})
```
Editar un usuario por ID en `http://localhost:3000/user/id`
```
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
```
Eliminar un usuario por ID en `http://localhost:3000/user/id`
```
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
```
