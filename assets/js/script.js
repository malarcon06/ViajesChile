$(function(){
    //Selecciona cada elemento con la clase brand-logo y agrega el tooltip a cada uno
    $('.brand-logo').each(function(){
        new bootstrap.Tooltip(this);
    })

    // Selecciona cada boton de redes sociales y agrega el tooltip al boton.
    $('.icons-container button').each(function(){
        new bootstrap.Tooltip(this);
    })
})