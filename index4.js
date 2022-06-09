$('document').ready(function() {
    $('select').on('change', function(){
        // console.log($(this)) // select
        console.log($(this).val())
        console.log($(this).find(':selected').data('price'))
        
        $('#result').text($(this).val()+' ' +$(this).find(':selected').data('price'))
    })
    //keydown, keyup
    $('input').on('keyup', function(){

        var letter = $(this).val();

        console.log(letter)

        $('#result').text(letter)
    });

    $('a').on('click', function(e) {
        e.preventDefault();
                // e.stopPropagation();

        console.log('achor clicked')
    })

    $('container3').on('click', function(e){
        console.log('div clicked')
    })

    $()
});