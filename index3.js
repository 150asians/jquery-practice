$('document').ready(function(){
    // event delegation
    $('#example').on('click', 'button', function(e){
        // $(this) === $('button')
        // console.log($(this))
        $(this).parent().addClass('highlighted');
    });

});

