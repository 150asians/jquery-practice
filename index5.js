$('document').ready(function() {
    // append() prepend()
    $('button').on('click', function(){
        var cityToAdd = $(this).prev().val(); // Balkhash

        var htmlToAdd = 
            '<div class="item">'
            + '<div class="remove">X</div>'
            + cityToAdd  // Balkhash
            + '</div>';

           

        $('#places-container').prepend(htmlToAdd);
        // $('#places-container').children().first().next().before(htmlToAdd);

        // $(':contains(Almata)').last().before(htmlToAdd);
        // $(':contains(Almata)').last().after(htmlToAdd);

        $('.remove').on('click', function(){
            $(this).parent().remove();
        })
    
        $('.item').on('click', '.remove', function(){
            console.log($(this))
            $(this).parent().remove();
        })
    });


    $('.remove').on('click', function(){
        $(this).parent().remove();
    })

    $('.item').on('click', '.remove', function(){
        console.log($(this))
        $(this).parent().remove();
    })

    // empty
    $('#container').on('click', function(){
        $(this).empty();
    })
});