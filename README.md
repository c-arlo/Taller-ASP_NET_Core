# Proyecto ASP.NET Core – Lista de Tareas Personalizada
Este repositorio contiene el proyecto desarrollado durante el webinar "Uso de ASP.NET Core",
donde se implementa una aplicación web completa utilizando el patrón Modelo-VistaControlador (MVC).
## Características principales
- Aplicación web construida con ASP.NET Core MVC.
- Autenticación de usuarios (cada usuario accede a su cuenta).
- Gestión de listas de tareas personalizadas por usuario.
- Funcionalidades CRUD:
- Crear nuevas tareas.
- Leer y visualizar tareas.
- Actualizar tareas existentes.
- Eliminar tareas.
- Filtrado por prioridad y orden para organizar las tareas.
---
## Instrucciones para ejecutar el proyecto
### 1. Clonar el repositorio
```bash
git clone https://github.com/usuario/nombre-del-repositorio.git
```
### 2. Abrir el proyecto
- Abre la solución en Visual Studio o Visual Studio Code.

### 3. Configurar la base de datos
- Actualiza la cadena de conexión en appsettings.json según tu entorno.
- Ejecuta las migraciones:
```bash
dotnet ef database update
```

### 4. Ejecutar la aplicación
dotnet run
Accede a la aplicación en: https://localhost:7151

## Tecnologías utilizadas
- ASP.NET Core 7.0
- Entity Framework Core
- SQLite
- Bootstrap para diseño responsivo
- C#

## Estructura del proyecto
ProyectoASPNetCore/  
├── Controllers/ - Controladores MVC  
├── Models/ - Modelos de datos  
├── Views/ - Vistas Razor  
├── wwwroot/ - Recursos estáticos (CSS, JS)  
├── appsettings.json - Configuración  
└── README.md - Documentación del proyecto  
