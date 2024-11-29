
# Blog de Psicología 🧠

Este proyecto es un **blog de psicología** administrado por una psicóloga, diseñado para publicar contenido organizado en categorías específicas. Además, incluye funcionalidades como diseño responsivo y filtrado por categorías, y planea incorporar un sistema de citas en el futuro.

## 🚀 Funcionalidades principales

- **Lectura de contenido público**: Los visitantes pueden acceder libremente a las publicaciones categorizadas.
- **Modo responsivo**: Diseño optimizado para dispositivos móviles.
- **Filtrado por categorías**: Los usuarios pueden buscar publicaciones según las siguientes categorías:
  - Bienestar Mental
  - Relaciones Interpersonales
  - Desarrollo Personal
  - Infantil
  - Herramientas y Recursos
  - Salud Emocional
- **Administración de contenido**: La psicóloga (admin) puede crear y eliminar publicaciones del blog.
- **Gestión de categorías**: La administración puede crear nuevas categorías y listar las existentes.

---

## 📂 Estructura del Proyecto

```
.
├── controllers/          # Lógica de negocio
├── routes/               # Rutas de la API
├── models/               # Consultas SQL y configuración
├── client/               # Aplicación React (Front-end)
├── .env                  # Variables de entorno
└── README.md             # Documentación del proyecto
```

---

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js con Express.
- **Front-end**: React.
- **Base de Datos**: PostgreSQL gestionada con `pg` y `pgAdmin`.
- **Despliegue**: Render.
- **Documentación de la API**: Swagger.
- **Entorno de Desarrollo**: Variables de entorno gestionadas con `dotenv`.
- **Seguridad**: Uso de SSL para conexiones seguras.

---

## 📄 Endpoints de la API

**Próximamente documentados con Swagger.**

- **Usuarios**:
  - `GET /users` - Obtener usuarios.
  - `POST /users` - Crear usuario.
  
- **Blogs**:
  - `GET /blogs` - Listar publicaciones.
  - `POST /blogs` - Crear publicación.
  - `PUT /blogs/:id` - Actualizar publicación.
  - `DELETE /blogs/:id` - Eliminar publicación.

- **Categorías**:
  - `GET /categorias` - Listar todas las categorías disponibles.
  - `POST /categorias` - Crear una nueva categoría (solo admin).

- **Citas** (futuro):
  - Gestión de citas por parte del administrador.

---

## 🌟 Estado del Proyecto

- **Implementado**:
  - Publicación y lectura de contenido categorizado.
  - Modo responsivo para dispositivos móviles.
  - Filtrado por categorías.
  - **Gestión de categorías**:
    - Listado de categorías disponibles.
    - Creación de nuevas categorías (solo para admin).

- **En desarrollo**:
  - Front-end conectado a las funcionalidades del back-end.
  - Documentación de API con Swagger.

- **Planes futuros**:
  - Sistema de citas vinculado al blog.
  - Autenticación de usuarios.
  - Mejora de diseño visual.

---

## 📸 Progreso del Proyecto

Aquí añadiremos imágenes o gifs que muestren el estado del proyecto, la interfaz y el flujo de trabajo.

---

## 🙏 Créditos

Este proyecto fue posible gracias al apoyo y mentoría de **Alejandro Reyes**.

---

## 🛑 Licencia y Contribuciones

Este proyecto es privado y no acepta contribuciones externas.

---
