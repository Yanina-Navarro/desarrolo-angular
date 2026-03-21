## 💬 Angular ChatBot - Trabajo Final
Este es el repositorio del proyecto final para el curso de Desarrollo con Angular. Se trata de una aplicación de mensajería dinámica que permite gestionar chats, enviar mensajes en tiempo real (simulado) y persistir la información localmente.

## 🚀 Descripción del Proyecto
La aplicación permite a los usuarios interactuar con una lista de contactos, crear nuevos chats mediante formularios reactivos y mantener conversaciones. El estado de la aplicación se gestiona de forma reactiva, garantizando que la interfaz responda instantáneamente a los cambios del usuario.

## ✨ Características Principales
Gestión Dinámica de Chats: Creación de nuevos contactos mediante formularios reactivos de Angular.

Mensajería Instantánea: Envío de mensajes con actualización automática de la vista.

Filtro de Búsqueda: Buscador en tiempo real para filtrar la lista de chats.

Persistencia Local: Uso de LocalStorage para que los chats y mensajes no se pierdan al recargar la página.

Diseño Responsivo: Interfaz adaptada para una visualización fluida.

## 🛠️ Tecnologías Utilizadas
Angular 17/18: Framework principal.

Signals: Para una gestión de estado reactiva y eficiente.

Angular Router: Gestión de navegación entre la lista y las ventanas de chat.

Reactive Forms: Validación y manejo de datos en la creación de chats.

TypeScript: Lenguaje base para lógica robusta.

CSS: Estilos personalizados con Flexbox para layouts dinámicos.

## 📋 Estructura del Proyecto
La arquitectura sigue las mejores prácticas de Angular, separando responsabilidades:

src/app/models/: Definición de interfaces de TypeScript (Chat, Message).

src/app/services/: ChatService, el corazón de la app que maneja las Signals y el LocalStorage.

src/app/components/:

chat-list: Sidebar con buscador y lista de contactos.

chat-item: Componente visual para cada contacto en la lista.

chat-window: Ventana principal donde ocurre la conversación.

new-chat: Formulario reactivo para crear nuevos chats.

src/app/pipes/: CustomDatePipe para formatear el tiempo transcurrido (ej: "Hace 5 min").

## 💻 Instalación y Ejecución Local
Sigue estos pasos para correr el proyecto en tu computadora:

1. **Clonar el repositorio**

Bash
git clone https://github.com/Yanina-Navarro/desarrolo-angular.git

2. **Ingresar a la carpeta del proyecto**

Bash
cd desarrolo-angular

3. **Instalar las dependencias**

Bash
npm install
4. **Iniciar el servidor de desarrollo:**

Bash
ng serve

5. **Abrir el navegador:**
Ve a http://localhost:4200/ para ver la aplicación funcionando.

## 🧪 Cómo Probar la Aplicación
**Explorar Chats:** Selecciona a "Juan" o "Ana" en la lista lateral para ver sus mensajes.

**Enviar Mensajes:** Escribe en el campo de texto inferior y presiona Enter o el botón de enviar. Verás cómo aparece el globo verde (derecha) con la hora actual.

**Crear un Chat:** Haz clic en el botón "+" arriba de la lista. Completa el nombre en el formulario y dale a "Crear". Serás redirigido automáticamente al nuevo chat.

**Persistencia:** Recarga la página (F5) y verás que tus mensajes y nuevos chats siguen ahí gracias al LocalStorage.

**Búsqueda:** Usa la barra de búsqueda para filtrar contactos por nombre.

## 💡 Consideraciones Adicionales
**Estado de Conexión:** Los contactos muestran un indicador visual (verde/rojo) basado en su propiedad online.

**Manejo de Fechas:** Se implementó una lógica especial para transformar los datos guardados en LocalStorage (que son strings) de vuelta a objetos Date de JavaScript para que los Pipes funcionen correctamente.