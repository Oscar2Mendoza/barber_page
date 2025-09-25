$(function () { 
    $("#citaForm input, #citaForm textarea, #citaForm select").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // Manejo de errores opcional
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();

            // Capturar datos
            var nombre = $("input[name='nombre']").val();
            var telefono = $("input[name='telefono']").val();
            var edad = $("input[name='edad']").val();
            var corte = $("select[name='corte']").val();
            var lugar = $("select[name='Lugar']").val(); // coincide con el formulario
            var fecha = $("input[name='fecha']").val();
            var detalles = $("textarea[name='detalles']").val();
            
            // Llenar modal con datos
            $("#mNombre").text(nombre);
            $("#mTelefono").text(telefono);
            $("#mEdad").text(edad);
            $("#mCorte").text(corte);
            $("#mLugar").text(lugar);
            $("#mFecha").text(fecha);
            $("#mDetalles").text(detalles);

            // Mostrar modal
            $("#modal").modal("show");
        },
        filter: function () {
            return $(this).is(":visible");
        }
    });

    // Botón cerrar y enviar a WhatsApp
    $("#cerrarModal").click(function () {
        var nombre = $("#mNombre").text();
        var telefono = $("#mTelefono").text();
        var edad = $("#mEdad").text();
        var corte = $("#mCorte").text();
        var lugar = $("#mLugar").text();
        var fecha = $("#mFecha").text();
        var detalles = $("#mDetalles").text();

        var mensaje = `Hola, quiero agendar una cita.%0A
👤 Nombre: ${nombre}%0A
📞 Teléfono: ${telefono}%0A
🎂 Edad: ${edad}%0A
✂️ Corte: ${corte}%0A
📍 Lugar: ${lugar}%0A
📝 Detalles: ${detalles}%0A
📅 Fecha: ${fecha}`;

        // Número de WhatsApp (reemplázalo con el de Yeiron--es el mío Oscar)
        var numero = "573127418644";
        var url = `https://wa.me/${numero}?text=${mensaje}`;

        window.open(url, "_blank");
        $("#modal").modal("hide");
        $("#citaForm").trigger("reset");
    });
});
