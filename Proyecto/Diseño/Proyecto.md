# Proyecto miracle team rojo

## Resumen

El proyecto se basa en una agenda que coordine los tiempos de ocio de un grupo de usuarios.

-   Un usuario crea un evento en la aplicacion.
-   Luego, mediante una base de datos de agendas personales de los participantes, se generan 3 opciones (max) para la realizacion del evento (dia y hora).
-   Se somete a votacion de los participantes entre estas opciones y se genera el evento.
-   Se informa a todos los participantes del evento.

### Se someteria a votacion una vez enviada la notificacion lo siguiente

> Fecha y hora (puede aceptar mas de una opcion)

> Lugar para realizar la actividad

---

---

## Interfaz principal

**La pagina principal contara con:**

-   Un calendario personal. Sera completado con las fechas que el usuario ya tiene ocupadas con actividades (¿Tambien funciona como agenda personal? (Si se puede usar la agenda de google mucho mejor))

-   Un sidebar derecho con la lista de eventos confirmados:

    -   Las reuniones agendadas con actividades grupales seran distinguidas por los colores respectivos de los grupos

    -   Al hacer click sobre la actividad se pasa a la pagina del evento, donde esta mas detallada la informacion.

    -   Por cada evento aparecera una notificacion diferente para el usuario administrador(creador del evento) y para los usuarios comunes.

-   Un sidebar izquierdo con la lista invitaciones a eventos:

    -   Haciendo click se pasa a la votacion del evento.

    -   Solo se muestran invitaciones a votaciones activas.

---

---

## Formulario de creacion del evento

Cada uno de los integrantes puede proponer un evento llenando un formulario

-   Nombre del evento.
-   Descripcion.
-   Ubicacion.
-   Preferencia de estado del tiempo? (trabajar con api de clima para determinar el pronostico)
-   Fecha limite. (Si no se encuentra una coincidencia previamente a esta fecha el sistema lo elimina)
-   Invitados? (se puede trabajar con un enlace para no tener que ingresar manualmente los invitados, sino un numero de votantes.)

Este evento quedara guardado teniendo en cuenta la fecha de creacion del mismo. El sistema al encontrar una fecha y hora libre coincidente entre los integrantes del grupo, y que no supere la fecha limite, genera el evento y procede a la votacion. Dispara una notificacion con los datos del mismo a todos los integrantes.

De no haber coincidencia se informa al creador del evento con un msj de error.

---

---

## Votacion

A cada uno de los integrantes le llegara una invitacion a un nuevo evento donde debera participar de la votacion.

Este formulario contiene:

-   Nombre del evento.
-   Descripcion.

Opciones:

-   Max 3 opciones de fecha y hora.
-   Ubicacion (Opcional, puede ser definido por el admin al crear el evento.)
-   Lista de participantes.

Este evento quedara guardado teniendo en cuenta la fecha de creacion del mismo. El sistema al encontrar una fecha y hora libre coincidente entre los integrantes del grupo, y que no supere la fecha limite, genera el evento y procede a la votacion. Dispara una notificacion con los datos del mismo a todos los integrantes.

De no haber coincidencia se informa al creador del evento con un msj de error.

Se cierra la votacion cuando todos los participantes votaron, o cuando se llega a la fecha limite (queda definir que pasa en este ultimo paso).

---

---

## Creacion de usuario:

Va a ser un boton en el nav, al tocarlo va a abrir un formulario solicitando:

-   Nombre
-   apellido
-   mail
-   Nombre de usuario
-   Contraseña

> A nivel de base de datos tambien se contaran con los siguientes datos:

-   id_usuario:
-   fecha_hora_creacion:
-   groups:
-   events:
