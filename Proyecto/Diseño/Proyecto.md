# Proyecto MiracleLab Team Rojo

## Resumen

~~El proyecto se basa en una agenda que coordine los tiempos de ocio de un grupo de usuarios.~~

El proyecto se basa en un gestor de eventos sociales:

-   Un usuario crea un evento en la aplicacion, mediante un formulario.

-   ~~Luego, mediante una base de datos de agendas personales de los participantes, se generan 3 opciones (max) para la realizacion del evento (dia y hora).~~

-   En el formulario de creacion, el usuario debe ingresar una descripcion del evento, invitados y como maximo 3 fechas tentativas de realizacion de dicho evento. Tambien debe ingresarse una fecha limite para el fin de la votacion.

-   La invitacion se realiza de dos formas: por invitacion a una lista de "amigos" dentro de la misma aplicacion, o por medio de un enlace generado exclusivamente para el evento (lo genera la aplicacion al crear el evento. De esta manera se puede invitar a un usuario que todavia no este registrado en la aplicacion. Antes de participar del evento, el usuario debe loguearse o registrarse.)

-   Una vez generado el evento se somete a votacion entre los participantes.

-   Se informa a todos los participantes el resultado de la votacion y fecha del evento, mediante un email a la casilla registrada.

-   Si el usuario tiene asociada una casilla de gmail, se registra el evento en su calendario de google.(? Si llegamos)

### Se someteria a votacion una vez enviada la notificacion lo siguiente

> Fecha y hora (puede aceptar mas de una opcion)

> Lugar para realizar la actividad

---

---

## Interfaz principal

**La pagina principal contara con:**

-   ~~Un calendario personal. Sera completado con las fechas que el usuario ya tiene ocupadas con actividades (¿Tambien funciona como agenda personal? (Si se puede usar la agenda de google mucho mejor))~~

-   Un formulario para la creacion de un nuevo evento.

-   Un sidebar derecho con la lista de eventos confirmados:

    -   ~~Las reuniones agendadas con actividades grupales seran distinguidas por los colores respectivos de los grupos~~

    -   Al hacer click sobre la actividad se pasa a la pagina del evento, donde esta mas detallada la informacion.

    -   Por cada evento aparecera una notificacion diferente para el usuario administrador(creador del evento) y para los usuarios comunes. Solo el administrador puede eliminar un evento confirmado. Se notifica a todos los participantes si esto sucede.

-   Un sidebar izquierdo con la lista invitaciones a eventos:

    -   Haciendo click se pasa a la votacion del evento.

    -   Solo se muestran invitaciones a votaciones activas.

![Imagen calendario](imagenes\Calendario.png)

---

## ![Imagen calendario](imagenes\InformacionEvento.png)

## <div style="page-break-after: always;"></div>

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

![Imagen calendario](imagenes\FormularioCreacionEvento.png)

## <div style="page-break-after: always;"></div>

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

![Imagen calendario](imagenes\FormularioVotacionEvento.png)

## <div style="page-break-after: always;"></div>

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

---

---

## Wireframe:

Se deja el link para el wireframe de la aplicacion, donde tambien se encuentran comentarios del funcionamiento.

[Wireframe](https://wireframe.cc/pro/pp/c1fd42edd567483 "Proyecto")
